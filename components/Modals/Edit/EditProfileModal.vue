<template>
  <div class="modal-content">
    <div class="box">
      <section>
        <div class="title">Edit Your Profile</div>

        <b-field label="Your first name">
          <b-input
            v-model="editForm.firstName"
            maxlength="15"
          />
        </b-field>

        <b-field label="Your last name">
          <b-input
            v-model="editForm.lastName"
            maxlength="15"
          />
        </b-field>

        <b-field label="Your username">
          <b-input
            v-model="editForm.username"
            maxlength="15"
          />
        </b-field>
        <b-field label="Profile Picture" />

        <div class="profilePicSection">
          <p class="profilePic">
            <img :src="editForm.profilePicture" />
          </p>
          <a class="button action" @click="">
            <input class="file-input" type="file" ref="file" @change="selectFile()" />
            <span v-if="editForm.profilePicture">Change Profile Picture</span>
            <span v-else>Add Profile Picture</span> &nbsp; <font-awesome-icon icon="camera" />
          </a>
        </div>
        <b-field label="Description">
          <b-input
            v-model="editForm.description"
            maxlength="500"
            type="textarea"
          />
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
      file: '',
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
    async selectFile() {
      this.file = this.$refs.file.files[0];
      let reader = new FileReader();
      const self = this;
      reader.onload = (e) => {
        self.editForm.profilePicture = e.target.result;
      };
      reader.readAsDataURL(this.file);
    },
    async uploadImage() {
      const formData = new FormData();
      formData.append('file', this.file);
      formData.append('picType', 'user');
      try {
        const image = await this.$axios.$post('/api/v1/profilePicUpload', formData);
        this.editForm.profilePicture = image.file;
      } catch(err) {
        console.log(err);
        this.$toast.open({
          duration: 5000,
          message: 'There was an error uploading your profile picture. Please try again.',
          position: 'is-top',
          type: 'is-danger'
        })
      }
    },
    async editProfile(editForm) {
      if (this.profilePicture !== editForm.profilePicture) {
        await this.uploadImage();
        if (this.profilePicture.includes('https://kowalla-dev')) {
          const fileName = (this.profilePicture.split('profile-pics/'))[1];
          this.$axios.$post('/api/v1/imageDelete', {
            bucket: `kowalla-dev/user/profile-pics`,
            fileName,
          });
        }
      }
      try {
        let profileData = await this.$axios.$put(`api/v1/profiles/${this.profileId}`, {
          firstName: editForm.firstName, // will need to update local state
          lastName: editForm.lastName,
          username: editForm.username,
          description: editForm.description,
          profilePicture: editForm.profilePicture,
        });

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
.button.action {
  color: white;
  background-color: #39C9A0;
  border-color: #39C9A0;
  margin-bottom: 1.75em;
}
.profilePic img {
  width: 180px;
  height: 180px;
  border-radius: 0.75em;
  object-fit: cover;
}
  .profilePicSection {
    text-align: center;
  }
</style>
