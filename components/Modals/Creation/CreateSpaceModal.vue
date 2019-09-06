<template>
  <div class="modal-content">
    <div class="box">
      <b-tabs :value="type">
        <!-- Project -->
        <b-tab-item label="Project">
          <section>
            <div class="title">Create a Project</div>

            <b-field label="Project Name">
              <b-input
                v-model="spaceForm.projectName"
                maxlength="20"
                placeholder="Kowalla"
              />
            </b-field>

            <b-field label="Project username">
              <b-input
                v-model="spaceForm.name"
                maxlength="20"
                placeholder="@Kowalla"
              />
            </b-field>

            <b-field label="Description">
              <b-input
                v-model="spaceForm.description"
                maxlength="500"
                type="textarea"
                placeholder="We're the world's online coworking space."
              />
            </b-field>

            <a class="button action" @click="createProject(spaceForm)">
              Create
            </a>
          </section>
        </b-tab-item>

        <!-- Space -->
        <b-tab-item label="Space">
          <section>
            <div class="title">Create a Space</div>

            <b-field label="Space name">
              <b-input
                v-model="spaceForm.name"
                placeholder="StreetwearStartup"
                maxlength="20"
              />
            </b-field>

            <b-field label="Description">
              <b-input
                v-model="spaceForm.description"
                maxlength="200"
                type="textarea"
                placeholder="The place to be if you want to build your own streetwear company."
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
  name: "CreateSpaceModal",
  props: {
    type: { type: Number, default: 0 },
  },
  data() {
    return {
      spaceForm: {
        name: "",
        projectName: "",
        description: "", // text area
        profilePicture: "", // need to add upload
        headerPicture: "", // need to add upload
        admins: [], // just the current user for now
      },
    };
  },
  methods: {
    async createProject(spaceForm) {
      try {
        let projectData = await this.$axios.$post("api/v1/projects", {
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
        this.$store.dispatch("user/updateOwned", subObj);
        this.$axios.$post(
          `/api/v1/profiles/${this.$store.state.user._id}/subs`,
          {
            projectId: projectData._id,
          }
        );

        // change page and close modal
        this.$parent.close();
        this.$router.push(`/beta/project/${projectData.name}/edit`);
      } catch (e) {
        console.log(e);
      }
    },
    async createSpace(spaceForm) {
      try {
        let spaceData = await this.$axios.$post("api/v1/spaces", {
          name: spaceForm.name,
          description: spaceForm.description,
          isProject: false,
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
        this.$store.dispatch("user/updateOwned", subObj);
        this.$axios.$post(
          `/api/v1/profiles/${this.$store.state.user._id}/subs`,
          {
            spaceId: spaceData._id,
          }
        );

        // change page and close modal
        this.$router.push({ path: `/beta/space/${spaceData.name}/edit` });
        this.$parent.close();
      } catch (e) {
        console.log(e);
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
</style>
