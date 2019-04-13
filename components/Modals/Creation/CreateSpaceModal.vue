<template>
  <div class="modal-content">
    <div class="box">
      <b-tabs>
        <!-- Project -->
        <b-tab-item label="Project">
          <section>
            <div class="title">Create a Project</div>

            <b-field label="Project username">
                <b-input
                  v-model="spaceForm.name"
                  maxlength="15"
                />
            </b-field>

            <b-field label="Profile Picture">
                <b-input
                  v-model="spaceForm.profilePicture"
                  maxlength="200"
                />
            </b-field>

            <b-field label="Banner Picture">
                <b-input
                  v-model="spaceForm.headerPicture"
                  maxlength="200"
                />
            </b-field>

            <b-field label="Description">
                <b-input
                  v-model="spaceForm.description"
                  maxlength="500"
                  type="textarea"
                />
            </b-field>

            <a class="button action" @click="createProject(spaceForm)">
                Create
            </a>
          </section>
        </b-tab-item>

        <!-- Community -->
        <b-tab-item label="Community">
          <section>
            <div class="title">Create a Community</div>

            <b-field label="Community name">
                <b-input
                  v-model="spaceForm.name"
                  placeholder="KowallaFanClub"
                  maxlength="15"
                />
            </b-field>

            <b-field label="Profile Picture">
                <b-input
                  v-model="spaceForm.profilePicture"
                  maxlength="200"
                />
            </b-field>

            <b-field label="Banner Picture">
                <b-input
                  v-model="spaceForm.headerPicture"
                  maxlength="200"
                />
            </b-field>

            <b-field label="Description">
                <b-input
                  v-model="spaceForm.description"
                  maxlength="200"
                  type="textarea"
                />
            </b-field>
            
            <a class="button action" @click="createCommunity(spaceForm)">
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
  data() {
    return {
      spaceForm: {
        name: '',
        description: '', // text area
        profilePicture: '', // need to add upload
        headerPicture: '', // need to add upload
        admins: [], // just the current user for now
      },
    };
  },
  methods: {
    async createProject(spaceForm) {
      try {
        let projectData = await this.$axios.post('api/v1/projects', {
          name: spaceForm.name,
          description: spaceForm.description,
          profilePicture: spaceForm.profilePicture,
          headerPicture: spaceForm.headerPicture,
          admins: [this.$store.state.user.username]
        });

        if (projectData.status === 201) {
          // update local state
          let subInfo = {
            name: projectData.data.name,
            pictureURL: projectData.data.profilePicture,
            numSubs: 7,
            communityId: projectData.data._id
          };
          let subObj = { subBool: true, ...subInfo };

          // this will also update server-side subscriptions
          this.$store.dispatch('user/updateOwned', subObj)

          // change page and close modal
          this.$router.push({ path: `/dev/p/${projectData.data.name}` });
          this.$parent.close();
        }
      }
      catch (e) {
        console.log(e);
      }
    },
    async createCommunity(spaceForm) {
      try {
        let communityData = await this.$axios.post('api/v1/communities', {
          name: spaceForm.name,
          description: spaceForm.description,
          profilePicture: spaceForm.profilePicture,
          headerPicture: spaceForm.headerPicture,
          admins: [this.$store.state.user.username]
        });

        if (communityData.status === 201) {
          // update local state
          let subInfo = {
            name: communityData.data.name,
            pictureURL: communityData.data.profilePicture,
            numSubs: 7,
            communityId: communityData.data._id
          };
          let subObj = { subBool: true, ...subInfo };

          // this will also update server-side subscriptions
          this.$store.dispatch('user/updateOwned', subObj)

          // change page and close modal
          this.$router.push({ path: `/dev/c/${communityData.data.name}` });
          this.$parent.close();
        }
      }
      catch (e) {
        // need error handling during QA
      }
    }
  },

}
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
