<template>
  <div class="modal-content">
    <div class="box">

      <section>
        <div class="title">Edit {{name}}</div>

        <b-field label="Project username">
            <b-input v-model="editForm.name" maxlength="15"></b-input>
        </b-field>

        <b-field label="Profile Picture">
            <b-input v-model="editForm.profilePicture" maxlength="200"></b-input>
        </b-field>

        <b-field label="Banner Picture">
            <b-input v-model="editForm.headerPicture" maxlength="200"></b-input>
        </b-field>

        <b-field label="Description">
            <b-input v-model="editForm.description" maxlength="500" type="textarea"></b-input>
        </b-field>
        <a class="button action" @click="editProject(editForm)">
            Submit
        </a>
      </section>

    </div>
  </div>
</template>
<script>
export default {
  name: "CreateSpaceModal",
  data() {
    return {
      editForm: {
        name: '',
        description: '', // text area
        profilePicture: '', // need to add upload
        headerPicture: '', // need to add upload
        admins: [], // just the current user for now
      },
    };
  },
  props: {
    name: String,
    headerPicture: String,
    profilePicture: String,
    description: String,
    projectId: String,
  },
  mounted() {
    // cast props to form
    this.editForm.name = this.name;
    this.editForm.headerPicture = this.headerPicture;
    this.editForm.profilePicture = this.profilePicture;
    this.editForm.description = this.description;
  },
  methods: {
    async editProject(editForm) {
      console.log('edit project');
      try {
        let projectData = await this.$axios.put(`api/v1/projects/${this.projectId}`, {
          name: editForm.name, // will need to update local state
          description: editForm.description,
          profilePicture: editForm.profilePicture,
          headerPicture: editForm.headerPicture,
        });
        console.log(projectData);

        if (projectData.status === 200) {

          // update state with changes -> should probably check for changes
          let subObj = {
            name: projectData.data.name,
            pictureURL: projectData.data.profilePicture,
            projectId: projectData.data._id
          };


          //this.$store.dispatch('user/editOwned', subObj)
          this.$store.commit('user/editOwned', subObj);

          // if name returned isn't the same as we started with
          if (projectData.data.name !== this.name) {
            this.$router.push({ path: `/dev/p/${projectData.data.name}` });
          } else { // otherwise, refresh
            this.$router.go()
          }

          this.$parent.close();
        }
      } catch (e) {
        console.log(e);
      }
    },
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
