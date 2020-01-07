<template>
  <div class="modal-content">
    <div class="box">
      <b-tabs :value="type">
        <!-- Project -->
        <b-tab-item label="Project">
          <section>
            <div class="title">
              Create a Project
            </div>

            <b-field label="Project Name">
              <b-input v-model="spaceForm.projectName" maxlength="20" placeholder="Kowalla" />
            </b-field>

            <b-field label="Project username">
              <b-input
                v-model="spaceForm.name"
                pattern="^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$"
                validation-message="No special characters or spaces allowed"
                icon="at"
                maxlength="20"
                placeholder="Kowalla"
              />
            </b-field>

            <b-field label="Tell us a bit about this project">
              <b-input v-model="spaceForm.description" maxlength="500" type="textarea" placeholder="We're the world's online coworking space." />
            </b-field>

            <a class="button action" @click="createProject(spaceForm)">
              Create
            </a>
          </section>
        </b-tab-item>

        <!-- Space -->
        <b-tab-item label="Space">
          <section>
            <div class="title">
              Create a Space
            </div>

            <b-field label="Space name">
              <b-input
                v-model="spaceForm.name"
                placeholder="SideProject"
                pattern="^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$"
                icon="hashtag"
                validation-message="No special characters or spaces allowed"
                maxlength="20"
              />
            </b-field>

            <b-field label="Tell us a bit about this community">
              <b-input
                v-model="spaceForm.description"
                maxlength="500"
                type="textarea"
                placeholder="A community for sharing and receiving constructive feedback on side projects"
              />
            </b-field>

            <a class="button action" @click="createSpace(spaceForm)">
              Create
            </a>
          </section>
        </b-tab-item>
      </b-tabs>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CreateSpaceModal',
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
        this.$router.push(`/beta/project/${projectData.name}/edit`);
      } catch (err) {
        console.log(err);
        this.$toast.open({
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
        this.$router.push({ path: `/beta/space/${spaceData.name}/edit` });
      } catch (err) {
        console.log(err);
        this.$toast.open({
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
<style lang="css" scoped>
.box {
    width: 800px;
    max-width: 100%;
}
.modal-content {
    border-radius: 6px;
    margin: 0;
    color: #39C9A0;
    width: auto;
}
.button.action {
  color: white;
  background-color: #39c9a0;
  border-color: #39c9a0;
}
</style>
