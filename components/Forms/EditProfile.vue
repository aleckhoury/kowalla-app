<template>
  <div class="box">
    <section>
      <div class="title">Edit Profile</div>

      <b-field label="Your first name">
        <b-input v-model="editForm.firstName" maxlength="20" />
      </b-field>

      <b-field label="Your last name">
        <b-input v-model="editForm.lastName" maxlength="20" />
      </b-field>

      <b-field label="Your username">
        <b-input v-model="editForm.username" maxlength="20" />
      </b-field>
      <b-field label="Profile Picture" />

      <div class="profilePicSection">
        <p class="profilePic">
          <img
            :src="editForm.profilePicture"
            onerror="this.src='https://gradientjoy.com/180'"
          >
        </p>
        <a class="button action">
          <input
            ref="file"
            class="file-input"
            type="file"
            @change="selectFile()"
          >
          <span v-if="editForm.profilePicture">Change Profile Picture</span>
          <span v-else>Add Profile Picture</span> &nbsp;
          <font-awesome-icon icon="camera" />
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
</template>
<script>
export default {
  name: "EditProfileForm",
  props: {
    firstName: { type: String, default: "" },
    lastName: { type: String, default: "" },
    username: { type: String, default: "" },
    profilePicture: { type: String, default: "" },
    description: { type: String, default: "" },
    profileId: { type: String, default: "" },
  },
  data() {
    return {
      file: "",
      editForm: {
        firstName: this.firstName,
        lastName: this.lastName,
        username: this.username,
        description: this.description, // text area
        profilePicture: this.profilePicture, // need to add upload
      },
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
      formData.append("file", this.file);
      formData.append("picType", "user");
      try {
        const image = await this.$axios.$post(
          "/api/v1/profilePicUpload",
          formData
        );
        this.editForm.profilePicture = image.file;
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
    async editProfile(editForm) {
      if (this.profilePicture !== editForm.profilePicture) {
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
        let profileData = await this.$axios.$put(
          `api/v1/profiles/${this.profileId}`,
          {
            firstName: editForm.firstName, // will need to update local state
            lastName: editForm.lastName,
            username: editForm.username,
            description: editForm.description,
            profilePicture: editForm.profilePicture,
          }
        );
        let editObj = {
          firstName: profileData.firstName,
          lastName: profileData.lastName,
          profilePicture: profileData.profilePicture,
          description: profileData.description,
          username: profileData.username,
        };

        this.$store.commit("user/editProfile", editObj);
        this.$router.push({ path: `/dev/user/${profileData.username}` });
      } catch (e) {
        console.log(e);
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
