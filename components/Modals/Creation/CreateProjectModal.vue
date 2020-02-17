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
        <div class="container">
          <div>
            <b-field label="Project Display Name">
              <b-input v-model="spaceForm.projectName" maxlength="20" placeholder="Kowalla" />
            </b-field>

            <b-field>
              <template slot="label">
                Project Username
                <BTooltip
                  multilined
                  type="is-light"
                  label="Your project username can't contain special characters besides '_' and must be 20 characters or less."
                >
                  <font-awesome-icon icon="question-circle" />
                </BTooltip>
              </template>
              <b-input
                v-model="spaceForm.name"
                pattern="^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$"
                validation-message="No special characters or spaces allowed"
                icon="at"
                maxlength="20"
                placeholder="Kowalla"
              />
            </b-field>
          </div>
          <div>
            <EmptyCreations />
          </div>

          <b-field class="description" label="Description - Tell us a bit about your project">
            <b-input v-model="spaceForm.description" maxlength="500" type="textarea" placeholder="We're the world's online coworking space." />
          </b-field>
        </div>

        <a class="button action" @click="createProject(spaceForm)">
          Create
        </a>
      </section>
    </div>
  </div>
</template>
<script>
import ProjectInfo from '../Other/ProjectInfo';
import EmptyCreations from '../../../svg/EmptyCreations';
export default {
  name: 'CreateSpaceModal',
  components: { EmptyCreations },
  props: {
    type: { type: Number, default: 0 },
  },
  data() {
    return {
      spaceForm: {
        name: '',
        projectName: '',
        description: '', // text area
        profilePicture: '', // need to add upload
        headerPicture: '', // need to add upload
        admins: [], // just the current user for now
      },
    };
  },
  computed: {
    formError() {
      const regex = RegExp('^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$');
      return {
        username: this.spaceForm.name.length ? !regex.test(this.spaceForm.name) : false,
        usernameLength: this.spaceForm.name.length > 20,
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
    async createProject(spaceForm) {
      if (Object.values(this.formError).some(x => x === true)) {
        return false;
      }
      try {
        let projectData = await this.$axios.$post('api/v1/projects', {
          name: spaceForm.name,
          projectName: spaceForm.projectName,
          isProject: true,
          description: spaceForm.description,
          profilePicture: spaceForm.profilePicture,
          headerPicture: spaceForm.headerPicture,
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

        // change page and close modal
        this.$parent.close();
        this.$router.push(`/project/${projectData.name}/edit`);
      } catch (err) {
        console.log(err);
        this.$buefy.toast.open({
          duration: 4000,
          message: err.response.data.errors.projectName.message,
          position: 'is-top',
          type: 'is-danger',
        });
      }
    },
    async createSpace(spaceForm) {
      if (Object.values(this.formError).some(x => x === true)) {
        return false;
      }
      try {
        let spaceData = await this.$axios.$post('api/v1/spaces', {
          name: spaceForm.name,
          description: spaceForm.description,
          isProject: false,
          profilePicture: spaceForm.profilePicture,
          admins: [this.$store.state.user.username],
        });
        // update local state
        let subInfo = {
          name: spaceData.name,
          pictureUrl: spaceData.profilePicture,
          isProject: false,
          numSubs: 7,
          spaceId: spaceData._id,
        };
        let subObj = { subBool: true, ...subInfo };

        // this will also update server-side subscriptions
        this.$store.dispatch('user/updateOwned', subObj);
        this.$axios.$post(`/api/v1/profiles/${this.$store.state.user._id}/subs`, {
          spaceId: spaceData._id,
        });

        // change page and close modal
        this.$parent.close();
        this.$router.push({ path: `/space/${spaceData.name}/edit` });
      } catch (err) {
        console.log(err);
        this.$buefy.toast.open({
          duration: 4000,
          message: err.response.data.errors.name.message,
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
