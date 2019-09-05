<template>
  <div class="box">
    <section>
      <div class="title">Edit @{{ name }}</div>

      <b-field label="Project username">
        <b-input v-model="editForm.projectName" maxlength="20" />
      </b-field>

      <b-field label="Project username">
        <b-input v-model="editForm.name" maxlength="20" />
      </b-field>

      <b-field label="Profile Picture" />

      <div class="picSection">
        <p class="profilePic">
          <img
            :src="editForm.profilePicture"
            onerror="this.src='https://gradientjoy.com/40'"
          >
        </p>
        <a class="button action">
          <input
            ref="profilePicFile"
            class="file-input"
            type="file"
            @change="selectFile('profile')"
          >
          <span v-if="editForm.profilePicture">Change Profile Picture</span>
          <span v-else>Add Profile Picture</span> &nbsp;
          <font-awesome-icon icon="camera" />
        </a>
      </div>

      <b-field label="Banner Picture" />

      <div class="picSection">
        <p class="bannerPic">
          <img
            :src="editForm.headerPicture"
            onerror="this.src='https://gradientjoy.com/1000x300'"
          >
        </p>
        <a class="button action">
          <input
            ref="bannerPicFile"
            class="file-input"
            type="file"
            @change="selectFile('banner')"
          >
          <span v-if="editForm.headerPicture">Change Banner Picture</span>
          <span v-else>Add Banner Picture</span> &nbsp;
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
      <a class="button action" @click="editProject(editForm)">
        Submit
      </a>
    </section>
  </div>
</template>
<script>
export default {
  name: "EditProjectForm",
  props: {
    name: { type: String, default: "" },
    projectName: { type: String, default: "" },
    headerPicture: { type: String, default: "" },
    profilePicture: { type: String, default: "" },
    description: { type: String, default: "" },
    projectId: { type: String, default: "" },
  },
  data() {
    return {
      profilePicFile: "",
      bannerPicFile: "",
      editForm: {
        name: this.name,
        projectName: this.projectName,
        description: this.description, // text area
        profilePicture: this.profilePicture, // need to add upload
        headerPicture: this.headerPicture, // need to add upload
        admins: [], // just the current user for now
      },
    };
  },
  methods: {
    async selectFile(type) {
      if (type === "profile") { this.profilePicFile = this.$refs.profilePicFile.files[0]; }
      else this.bannerPicFile = this.$refs.bannerPicFile.files[0];
      let reader = new FileReader();
      const self = this;
      reader.onload = e => {
        if (type === "profile") self.editForm.profilePicture = e.target.result;
        else self.editForm.headerPicture = e.target.result;
      };
      if (type === "profile") reader.readAsDataURL(this.profilePicFile);
      else reader.readAsDataURL(this.bannerPicFile);
    },
    async uploadImage(type) {
      const formData = new FormData();
      formData.append("picType", "project");
      if (type === "profile") {
        try {
          formData.append("file", this.profilePicFile);
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
      } else {
        formData.append("file", this.bannerPicFile);
        try {
          const image = await this.$axios.$post(
            "/api/v1/bannerPicUpload",
            formData
          );
          this.editForm.headerPicture = image.file;
        } catch (err) {
          console.log(err);
          this.$toast.open({
            duration: 5000,
            message:
              "There was an error uploading your banner picture. Please try again.",
            position: "is-top",
            type: "is-danger",
          });
        }
      }
    },
    async editProject(editForm) {
      if (this.profilePicture !== editForm.profilePicture) {
        await this.uploadImage("profile");
        if (this.profilePicture.includes("https://kowalla-dev")) {
          const fileName = this.profilePicture.split("profile-pics/")[1];
          this.$axios.$post("/api/v1/imageDelete", {
            bucket: `kowalla-dev/project/profile-pics`,
            fileName,
          });
        }
      }
      if (this.headerPicture !== editForm.headerPicture) {
        await this.uploadImage("banner");
        if (this.headerPicture.includes("https://kowalla-dev")) {
          const fileName = this.profilePicture.split("profile-pics/")[1];
          this.$axios.$post("/api/v1/imageDelete", {
            bucket: `kowalla-dev/project/banner-pics`,
            fileName,
          });
        }
      }
      try {
        let projectData = await this.$axios.$put(
          `api/v1/projects/${this.projectId}`,
          {
            name: editForm.name, // will need to update local state
            description: editForm.description,
            profilePicture: editForm.profilePicture,
            headerPicture: editForm.headerPicture,
          }
        );
        // update state with changes -> should probably check for changes
        let subObj = {
          name: projectData.name,
          pictureUrl: projectData.profilePicture,
          projectId: projectData._id,
        };
        //this.$store.dispatch('user/editOwned', subObj)
        this.$store.commit("user/editOwned", subObj);

        // if name returned isn't the same as we started with
        this.$router.push({ path: `/beta/project/${projectData.name}` });
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
<style lang="css" scoped>
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
.picSection {
    text-align: center;
}
.bannerPic img {
    width: 1000px;
    max-width: 100%;
    max-height: 250px;
    object-fit: cover;
}
</style>
