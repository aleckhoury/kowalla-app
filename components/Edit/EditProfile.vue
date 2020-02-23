<template>
  <div class="box">
    <section>
      <div class="title">
        {{ title }}
      </div>
      <form ref="form">
        <div class="container">
          <div>
            <b-field label="First name" expanded>
              <b-input v-model="editForm.firstName" required validation-message="This field is required" maxlength="20" />
            </b-field>

            <b-field label="Last name" expanded>
              <b-input v-model="editForm.lastName" required validation-message="This field is required" maxlength="20" />
            </b-field>

            <b-field :type="formError.username ? 'is-danger' : ''" :message="formError.username ? 'No special characters or spaces allowed' : ''">
              <template slot="label">
                Username
                <BTooltip
                  multilined
                  position="is-right"
                  type="is-light"
                  label="Your username can't contain special characters besides '_' and must be 20 characters or less."
                >
                  <font-awesome-icon icon="question-circle" />
                </BTooltip>
              </template>
              <b-input v-model="editForm.username" icon="at" required validation-message="This field is required" maxlength="20" />
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

          <b-field class="description" label="Tell us a bit about yourself">
            <b-input v-model="editForm.description" required validation-message="This field is required" maxlength="500" type="textarea" />
          </b-field>
        </div>
      </form>

      <a class="button action" @click="editProfile(editForm)">
        Submit
      </a>
    </section>
  </div>
</template>
<script>
export default {
  name: 'EditProfile',
  props: {
    firstName: { type: String, default: '' },
    lastName: { type: String, default: '' },
    username: { type: String, default: '' },
    profilePicture: { type: String, default: '' },
    description: { type: String, default: '' },
    profileId: { type: String, default: '' },
    title: { type: String, default: 'Edit Profile' },
    isOnboarding: { type: Boolean, default: false },
  },
  data() {
    return {
      file: '',
      editForm: {
        firstName: this.firstName,
        lastName: this.lastName,
        username: this.username,
        description: this.description,
        profilePicture: this.profilePicture,
      },
    };
  },
  computed: {
    formError() {
      const regex = RegExp('^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$');
      return {
        username: this.editForm.username.length ? !regex.test(this.editForm.username) : false,
      };
    },
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
        console.log(err);
        this.$buefy.toast.open({
          duration: 5000,
          message: 'There was an error uploading your profile picture. Please try again.',
          position: 'is-top',
          type: 'is-danger',
        });
      }
    },
    async editProfile(editForm) {
      if (Object.values(this.formError).some(x => x === true)) {
        return false;
      }
      if (this.profilePicture !== editForm.profilePicture) {
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
        this.$router.push({ path: `/user/${profileData.username}` });
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
.button.action {
  color: white;
  background-color: #39c9a0;
  border-color: #39c9a0;
  margin-bottom: 1.75em;
}
.profilePic img {
  width: 150px;
  height: 150px;
  border-radius: 6px;
  object-fit: cover;
}
.profilePicSection {
  text-align: center;
  padding: 1em;
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
  }
  .profilePic img {
    width: 120px;
    height: 120px;
  }
}
</style>
