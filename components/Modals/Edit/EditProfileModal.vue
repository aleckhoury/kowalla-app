<template>
  <div class="modal-content">
    <div class="box">

      <section>
        <div class="title">Edit Your Profile</div>

        <b-field label="Your first name">
            <b-input v-model="editForm.firstName" maxlength="15"></b-input>
        </b-field>

        <b-field label="Your last name">
            <b-input v-model="editForm.lastName" maxlength="15"></b-input>
        </b-field>

        <b-field label="Your username">
            <b-input v-model="editForm.username" maxlength="15"></b-input>
        </b-field>

        <b-field label="Profile Picture">
            <b-input v-model="editForm.profilePicture" maxlength="200"></b-input>
        </b-field>

        <b-field label="Description">
            <b-input v-model="editForm.description" maxlength="500" type="textarea"></b-input>
        </b-field>

        <a class="button action" @click="editProfile(editForm)">
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
        firstName: '',
        lastName: '',
        username: '',
        description: '', // text area
        profilePicture: '', // need to add upload
      },
    };
  },
  props: {
    firstName: String,
    lastName: String,
    username: String,
    profilePicture: String,
    description: String,
    profileId: String,
  },
  mounted() {
    // cast props to form
    this.editForm.firstName = this.firstName;
    this.editForm.lastName = this.lastName;
    this.editForm.username = this.username;
    this.editForm.profilePicture = this.profilePicture;
    this.editForm.description = this.description;
  },
  methods: {
    async editProfile(editForm) {
      console.log('edit profile');
      try {
        let profileData = await this.$axios.$put(`api/v1/profiles/${this.profileId}`, {
          firstName: editForm.firstName, // will need to update local state
          lastName: editForm.lastName,
          username: editForm.username,
          description: editForm.description,
          profilePicture: editForm.profilePicture,
        });
        console.log(profileData);

        if (profileData.status === 200) {

          let editObj = {
            firstName: profileData.firstName,
            lastName: profileData.lastName,
            profilePicture: profileData.profilePicture,
            description: profileData.description,
            username: profileData.username,
          };

          this.$store.commit('user/editProfile', editObj);

          // if name returned isn't the same as we started with
          if (profileData.username !== this.username) {
            this.$router.push({ path: `/dev/u/${profileData.username}` });
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
