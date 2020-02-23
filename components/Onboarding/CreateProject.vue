<template>
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
              <b-input
                ref="projectName"
                v-model="projectForm.projectName"
                required
                maxlength="50"
                validation-message="Project Name is required"
                placeholder="Kowalla"
              />
            </b-field>

            <b-field>
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
              <b-input
                ref="name"
                v-model="projectForm.name"
                required
                pattern="^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$"
                :validation-message="projectForm.name.length ? 'No special characters or spaces allowed besides \'_\'' : 'This field is required'"
                icon="at"
                maxlength="20"
                placeholder="kowalla"
              />
            </b-field>
          </div>
          <div>
            <EmptyCreations />
          </div>

          <b-field class="description" label="Description* - Tell us a bit about your project*">
            <b-input
              ref="description"
              v-model="projectForm.description"
              required
              maxlength="500"
              type="textarea"
              placeholder="We're the world's online coworking space."
            />
          </b-field>
        </div>
      </form>
      <div class="level">
        <a v-if="isMobile" class="button action level-item" :class="{ 'is-loading': loading }" @click="createProject(projectForm)">
          Create Project & Complete Signup &nbsp;<font-awesome-icon icon="angle-right" />
        </a>
        <a class="button secondary level-item" @click="$emit('complete-signup')">
          Skip & Complete
        </a>
        <a v-if="!isMobile" class="button action level-item" :class="{ 'is-loading': loading }" @click="createProject(projectForm)">
          Create Project & Complete Signup &nbsp;<font-awesome-icon icon="angle-right" />
        </a>
      </div>
    </section>
  </div>
</template>
<script>
import ProjectInfo from '../Modals/Other/ProjectInfo';
import EmptyCreations from '../../svg/EmptyCreations';
export default {
  name: 'CreateProject',
  components: { EmptyCreations },
  props: {
    isMobile: { type: Boolean, default: false },
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
      loading: false,
    };
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
    validate() {
      this.$refs.projectName.checkHtml5Validity();
      this.$refs.name.checkHtml5Validity();
      this.$refs.description.checkHtml5Validity();
      return this.$refs.form.checkValidity();
    },
    async createProject(projectForm) {
      if (this.validate()) {
        try {
          this.loading = true;
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
          this.loading = false;
          this.$emit('complete-signup');
        } catch (err) {
          console.log(err.response);
          this.loading = false;
          this.$buefy.toast.open({
            duration: 4000,
            message: err.response.data.message,
            position: 'is-top',
            type: 'is-danger',
          });
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@media only screen and (min-width: 600px) {
  .level-item:last-of-type {
    margin-left: 1em;
  }
}
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
.button.secondary {
  color: #39c9a0;
  background-color: white;
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
