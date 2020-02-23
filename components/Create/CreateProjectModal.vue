<template>
  <div class="modal-content">
    <div class="box">
      <section>
        <div class="title">
          Build your project on Kowalla!
        </div>
        <div class="subtitle">
          Creating a project enables you to cowork with other creators like you.
          <span class="small">(<span @click="openProjectInfoModal">What does this mean?</span>)</span>
        </div>
        <form ref="form">
          <div class="container">
            <div>
              <b-field label="Project Display Name*">
                <b-input v-model="projectForm.projectName" required maxlength="50" validation-message="Project Name is required" placeholder="Kowalla" />
              </b-field>

              <b-field :type="formError.username ? 'is-danger' : ''" :message="formError.username ? 'No special characters or spaces allowed' : ''">
                <template slot="label">
                  Project Username*
                  <BTooltip
                    multilined
                    type="is-light"
                    label="Your project username can't contain special characters besides '_' and must be 20 characters or less."
                  >
                    <font-awesome-icon icon="question-circle" />
                  </BTooltip>
                </template>
                <b-input v-model="projectForm.name" required validation-message="Project Username is required" icon="at" maxlength="20" placeholder="kowalla" />
              </b-field>
            </div>
            <div>
              <EmptyCreations />
            </div>

            <b-field class="description" label="Description* - Tell us a bit about your project*">
              <b-input v-model="projectForm.description" required maxlength="500" type="textarea" placeholder="We're the world's online coworking space." />
            </b-field>
          </div>
        </form>

        <a class="button action level-item" @click="createProject(projectForm)"> Create Project{{ startCoworking ? ' & Start Coworking' : '' }} </a>
      </section>
    </div>
  </div>
</template>
<script>
import ProjectInfo from '../Modals/Other/ProjectInfo';
import EmptyCreations from '../../svg/EmptyCreations';
export default {
  name: 'CreateProjectModal',
  components: { EmptyCreations },
  props: {
    type: { type: Number, default: 0 },
    startCoworking: { type: Boolean, default: false },
  },
  data() {
    return {
      projectForm: {
        name: '',
        projectName: '',
        description: '', // text area
        profilePicture: '', // need to add upload
        headerPicture: '', // need to add upload
        admins: [], // just the current user for now
        isValid: true,
      },
    };
  },
  computed: {
    formError() {
      const regex = RegExp('^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$');
      return {
        username: this.projectForm.name.length ? !regex.test(this.projectForm.name) : false,
      };
    },
  },
  methods: {
    openProjectInfoModal() {
      return this.$buefy.modal.open({
        parent: this,
        component: ProjectInfo,
        width: 700,
        hasModalCard: true,
      });
    },
    async createProject(projectForm) {
      if (!this.$refs.form.checkValidity() || this.formError.username) {
        return false;
      }
      try {
        let projectData = await this.$axios.$post('api/v1/projects', {
          name: projectForm.name,
          projectName: projectForm.projectName,
          isProject: true,
          description: projectForm.description,
          profilePicture: projectForm.profilePicture,
          headerPicture: projectForm.headerPicture,
          admins: [this.$store.state.user.username],
        });
        // update local state
        let subInfo = {
          name: projectData.name,
          pictureUrl: projectData.profilePicture,
          isProject: true,
          numSubs: 1,
          projectId: projectData._id,
        };
        let subObj = { subBool: true, ...subInfo };

        // this will also update server-side subscriptions
        this.$store.dispatch('user/updateOwned', subObj);
        this.$axios.$post(`/api/v1/profiles/${this.$store.state.user._id}/subs`, {
          projectId: projectData._id,
        });
        this.$parent.close();
        if (this.startCoworking) {
          this.$emit('select-project', subObj);
        } else {
          this.$router.push(`/project/${projectData.name}`);
        }
      } catch (err) {
        console.log(err);
        this.$buefy.toast.open({
          duration: 4000,
          message: err.response.data.message,
          position: 'is-top',
          type: 'is-danger',
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.box {
  width: 800px;
  max-width: 100%;
}
.modal-content {
  border-radius: 6px;
  margin: 0;
  color: #39c9a0;
  width: auto;
}
.button.action {
  color: white;
  background-color: #39c9a0;
  border-color: #39c9a0;
}
.b-tooltip {
  vertical-align: middle;
  color: grey;
  font-size: 14px;
}
.small {
  font-size: 14px;
  white-space: nowrap;
  cursor: pointer;

  & span {
    color: #39c9a0;
  }
}
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;

  & #emptyCreations {
    display: block;
    margin: 0 auto;
  }

  & .field.description {
    grid-column: span 2;
  }
}
</style>
