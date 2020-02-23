<template>
  <div class="box">
    <section>
      <div class="title">
        Complete Profile Details
      </div>
      <form ref="form">
        <div class="container">
          <div>
            <b-field label="First name*" expanded>
              <b-input ref="firstName" v-model="editForm.firstName" required validation-message="This field is required" maxlength="20" />
            </b-field>

            <b-field label="Last name*" expanded>
              <b-input ref="lastName" v-model="editForm.lastName" required validation-message="This field is required" maxlength="20" />
            </b-field>
          </div>
          <div>
            <div class="profilePicSection">
              <b-field label="Profile Picture" />
              <p class="profilePic">
                <img :src="editForm.profilePicture" />
              </p>
              <a class="button action">
                <input ref="file" class="file-input" type="file" @change="selectFile()" />
                <span class="profilePicAction">{{ editForm.profilePicture ? 'Change' : 'Add' }} Profile Picture</span>
                <font-awesome-icon icon="camera" />
              </a>
            </div>
          </div>

          <b-field class="description" label="Description* - Tell us a bit about yourself">
            <b-input ref="description" v-model="editForm.description" required validation-message="This field is required" maxlength="500" type="textarea" />
          </b-field>
        </div>
      </form>

      <a class="button action level-item" :class="{ 'is-loading': loading }" @click="editProfile(editForm)">
        Continue &nbsp;<font-awesome-icon icon="angle-right" />
      </a>
    </section>
  </div>
</template>
<script>
import ProjectInfo from '../Modals/Other/ProjectInfo';
export default {
  name: 'CreateProfile',
  data() {
    return {
      file: '',
      editForm: {
        firstName: this.$store.state.user.firstName,
        lastName: this.$store.state.user.lastName,
        username: this.$store.state.user.username,
        description: this.$store.state.user.description,
        profilePicture: this.$store.state.user.profilePicture,
      },
      loading: false,
    };
  },
  methods: {
    async selectFile() {
      this.file = this.$refs.file.files[0];
      let reader = new FileReader();
      const self = this;
      reader.onload = e => {
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
      } catch (err) {
        this.$buefy.toast.open({
          duration: 5000,
          message: 'There was an error uploading your profile picture. Please try again.',
          position: 'is-top',
          type: 'is-danger',
        });
      }
    },
    validate() {
      this.$refs.firstName.checkHtml5Validity();
      this.$refs.lastName.checkHtml5Validity();
      this.$refs.description.checkHtml5Validity();
      return this.$refs.form.checkValidity();
    },
    async editProfile(editForm) {
      if (this.validate()) {
        this.loading = true;
        if (this.profilePicture && this.profilePicture !== editForm.profilePicture) {
          await this.uploadImage();
          if (this.profilePicture.includes('https://kowalla-dev')) {
            const fileName = this.profilePicture.split('profile-pics/')[1];
            this.$axios.$post('/api/v1/imageDelete', {
              bucket: `kowalla-dev/user/profile-pics`,
              fileName,
            });
          }
        }
        try {
          let profileData = await this.$axios.$put(`api/v1/profiles/${this.$store.state.user._id}`, {
            firstName: editForm.firstName, // will need to update local state
            lastName: editForm.lastName,
            description: editForm.description,
            profilePicture: editForm.profilePicture,
          });
          let editObj = {
            firstName: profileData.firstName,
            lastName: profileData.lastName,
            username: profileData.username,
            profilePicture: profileData.profilePicture,
            description: profileData.description,
          };
          this.$store.commit('user/editProfile', editObj);
          this.loading = false;
          this.$store.commit('onboarding/incrementActiveStep');
        } catch (err) {
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
.button.action {
  color: white;
  background-color: #39c9a0;
  border-color: #39c9a0;
}
.profilePic img {
  width: 150px;
  height: 150px;
  border-radius: 6px;
  object-fit: cover;
}
.profilePicSection {
  text-align: center;
  padding: 0 1em 1em 1em;
}
.b-tooltip {
  vertical-align: middle;
  color: grey;
  font-size: 14px;
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
@media only screen and (max-width: 600px) {
  .button.action {
    width: 150px;
    font-size: 15px;
    white-space: normal;
    height: auto;
  }
  .profilePic img {
    width: 120px;
    height: 120px;
  }
}
</style>
