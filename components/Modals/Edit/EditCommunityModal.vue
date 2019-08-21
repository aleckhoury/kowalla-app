<template>
  <div class="modal-content">
    <div class="box">
      <section>
        <div class="title">Edit {{ name }}</div>

        <b-field label="Community name">
          <b-input v-model="editForm.name" maxlength="20" />
        </b-field>

        <b-field label="Profile Picture" />

        <div class="picSection">
          <p class="profilePic">
            <img :src="editForm.profilePicture" onerror="this.src='https://gradientjoy.com/200'" >
          </p>
          <a class="button action" >
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
            <img :src="editForm.headerPicture" onerror="this.src='https://gradientjoy.com/1000x250'" >
          </p>
          <a class="button action" >
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
        <a class="button action" @click="editCommunity(editForm)">
          Submit
        </a>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: "CreateSpaceModal",
  props: {
    name: { type: String, default: "" },
    headerPicture: { type: String, default: "" },
    profilePicture: { type: String, default: "" },
    description: { type: String, default: "" },
    communityId: { type: String, default: "" },
  },
  data() {
    return {
      profilePicFile: "",
      bannerPicFile: "",
      editForm: {
        name: "",
        description: "", // text area
        profilePicture: "", // need to add upload
        headerPicture: "", // need to add upload
        admins: [], // just the current user for now
      },
    };
  },
  mounted() {
    // cast props to form
    this.editForm.name = this.name;
    this.editForm.headerPicture = this.headerPicture;
    this.editForm.profilePicture = this.profilePicture;
    this.editForm.description = this.description;
  },
  methods: {
    async selectFile(type) {
      if (type === "profile") { this.profilePicFile = this.$refs.profilePicFile.files[0]; }
      else this.bannerPicFile = this.$refs.bannerPicFile.files[0];
      let reader = new FileReader();
      const self = this;
      reader.onload = e => {
        if (type === "profile") { self.editForm.profilePicture = e.target.result; }
        else self.editForm.headerPicture = e.target.result;
      };
      if (type === "profile") { reader.readAsDataURL(this.profilePicFile); }
      else reader.readAsDataURL(this.bannerPicFile);
    },
    async uploadImage(type) {
      const formData = new FormData();
      formData.append("picType", "community");
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
    async editCommunity(editForm) {
      if (this.profilePicture !== editForm.profilePicture) {
        await this.uploadImage();
        if (this.profilePicture.includes("https://kowalla-dev")) {
          const fileName = this.profilePicture.split("profile-pics/")[1];
          this.$axios.$post("/api/v1/imageDelete", {
            bucket: `kowalla-dev/community/profile-pics`,
            fileName,
          });
        }
      }
      if (this.headerPicture !== editForm.headerPicture) {
        await this.uploadImage("banner");
        if (this.headerPicture.includes("https://kowalla-dev")) {
          const fileName = this.profilePicture.split("profile-pics/")[1];
          this.$axios.$post("/api/v1/imageDelete", {
            bucket: `kowalla-dev/community/banner-pics`,
            fileName,
          });
        }
      }
      try {
        let communityData = await this.$axios.$put(
          `api/v1/communities/${this.communityId}`,
          {
            name: editForm.name, // will need to update local state
            description: editForm.description,
            profilePicture: editForm.profilePicture,
            headerPicture: editForm.headerPicture,
          }
        );
        // update state with changes -> should probably check for changes
        let subObj = {
          name: communityData.name,
          pictureUrl: communityData.profilePicture,
          communityId: communityData._id,
        };

        this.$store.commit("user/editOwned", subObj);

        // if name returned isn't the same as we started with
        if (communityData.name !== this.name) {
          this.$router.push({ path: `/dev/community/${communityData.name}` });
        } else {
          // otherwise, refresh
          this.$router.go();
        }
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
