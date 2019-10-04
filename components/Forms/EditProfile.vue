<template>
  <div class="box">
    <section>
      <div class="title">{{ title }}</div>

      <b-field label="First name">
        <b-input v-model="user.firstName" maxlength="20" />
      </b-field>

      <b-field label="Last name">
        <b-input v-model="user.lastName" maxlength="20" />
      </b-field>

      <b-field
        :type="{ 'is-danger': formError.username || formError.usernameLength }"
        :message="[{ 'No special characters or spaces allowed': formError.username },
                   { 'Username is too long': formError.usernameLength }]"
        label="Username">
        <b-input
          v-model="user.username"
          maxlength="20" />
      </b-field>
      <b-field label="Profile Picture" />

      <div class="profilePicSection">
        <p class="profilePic">
          <img :src="user.profilePicture" >
        </p>
        <a class="button action">
          <input
            ref="file"
            class="file-input"
            type="file"
            @change="selectFile()"
          >
          <span class="profilePicAction">{{ user.profilePicture ? 'Change' : 'Add' }} Profile Picture</span>
          <font-awesome-icon icon="camera" />
        </a>
      </div>
      <b-field label="Description">
        <b-input
          v-model="user.description"
          maxlength="500"
          type="textarea"
        />
      </b-field>

      <a class="button action" @click="editProfile()">
        Submit
      </a>
    </section>
  </div>
</template>
<script>
export default {
  name: "EditProfile",
  props: {
    title: { type: String, default: "Edit Profile" },
    isOnboarding: { type: Boolean, default: false },
  },
  data() {
    return {
      file: "",
      profilePicChanged: false,
    };
  },
  computed: {
    formError() {
      const regex = RegExp('^(?=.+$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$');
      return {
        username: this.user.username.length ? !regex.test(this.user.username) : false,
        usernameLength: this.user.username.length > 20,
      };
    },
    user: {
      get () {
        return this.$store.state.user;
      },
      set (user) {
        this.$store.commit('user/setUser', user);
      }
    },
  },
  methods: {
    async selectFile() {
      this.file = this.$refs.file.files[0];
      let reader = new FileReader();
      const self = this;
      reader.onload = e => {
        self.user.profilePicture = e.target.result;
      };
      reader.readAsDataURL(this.file);
    },
    async uploadImage() {
      const formData = new FormData();
      formData.append("file", this.file);
      formData.append("picType", "user");
      try {
        const image = await this.$axios.$post(
          "/api/v1/profilePicUpload",
          formData
        );
        this.profilePicChanged = true;
        this.user.profilePicture = image.file;
      } catch (err) {
        console.log(err);
        this.$toast.open({
          duration: 5000,
          message:
            "There was an error uploading your profile picture. Please try again.",
          position: "is-top",
          type: "is-danger",
        });
      }
    },
    async editProfile() {
      if (Object.values(this.formError).some(x => x === true)) {
        return false;
      }
      if (this.profilePicChanged) {
        await this.uploadImage();
        if (this.profilePicture.includes("https://kowalla-dev")) {
          const fileName = this.profilePicture.split("profile-pics/")[1];
          this.$axios.$post("/api/v1/imageDelete", {
            bucket: `kowalla-dev/user/profile-pics`,
            fileName,
          });
        }
      }
      try {
        let profileData = await this.$axios.$put(`api/v1/profiles/${this.user._id}`, this.user);
        let editObj = {
          firstName: profileData.firstName,
          lastName: profileData.lastName,
          profilePicture: profileData.profilePicture,
          description: profileData.description,
          username: profileData.username,
        };

        this.$store.commit("user/editProfile", editObj);
        if (this.isOnboarding) {
          this.$store.commit('onboarding/incrementActiveStep');
        } else {
          this.$router.push({ path: `/beta/user/${profileData.username}` });
        }
      } catch (err) {
        console.log(err);
        this.$toast.open({
          duration: 4000,
          message: err.response.data.errors.username.message,
          position: "is-top",
          type: "is-danger",
        });
      }
    },
  },
};
</script>
<style lang="css" scoped>
.card {
    border-radius: 6px;
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
    border-radius: 6px;
    object-fit: cover;
}
.profilePicSection {
    text-align: center;
}
</style>
