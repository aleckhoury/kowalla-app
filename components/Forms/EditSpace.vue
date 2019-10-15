<template>
  <div class="box">
    <section>
      <div class="title">
        Edit {{ name }}
      </div>

      <b-field
        :type="{ 'is-danger': formError.name || formError.nameLength }"
        :message="[{ 'No special characters or spaces allowed': formError.name }, { 'Space Name is too long': formError.nameLength }]"
        label="Space name"
      >
        <b-input v-model="editForm.name" pattern="^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$" validation-message="No special characters or spaces allowed" maxlength="20" />
      </b-field>

      <b-field label="Profile Picture" />

      <div class="picSection">
        <p class="profilePic">
          <img :src="editForm.profilePicture" />
        </p>
        <a class="button action">
          <input ref="profilePicFile" class="file-input" type="file" @change="selectFile('profile')" />
          <span class="profilePicAction">{{ editForm.profilePicture ? 'Change' : 'Add' }} Profile Picture</span>
          <font-awesome-icon icon="camera" />
        </a>
      </div>

      <b-field label="Banner Picture" />

      <div class="picSection">
        <p class="bannerPic">
          <img :src="editForm.headerPicture" onerror="this.src='https://gradientjoy.com/1000x250'" />
        </p>
        <a class="button action">
          <input ref="bannerPicFile" class="file-input" type="file" @change="selectFile('banner')" />
          <span v-if="editForm.headerPicture">Change Banner Picture</span>
          <span v-else>Add Banner Picture</span> &nbsp;
          <font-awesome-icon icon="camera" />
        </a>
      </div>

      <b-field label="Description">
        <b-input v-model="editForm.description" maxlength="500" type="textarea" />
      </b-field>
      <a class="button action" @click="editSpace(editForm)">
        Submit
      </a>
    </section>
  </div>
</template>
<script>
export default {
  name: 'CreateSpaceModal',
  props: {
    name: { type: String, default: '' },
    headerPicture: { type: String, default: '' },
    profilePicture: { type: String, default: '' },
    description: { type: String, default: '' },
    spaceId: { type: String, default: '' }
  },
  data() {
    return {
      profilePicFile: '',
      bannerPicFile: '',
      editForm: {
        name: this.name,
        description: this.description, // text area
        profilePicture: this.profilePicture, // need to add upload
        headerPicture: this.headerPicture, // need to add upload
        admins: [] // just the current user for now
      }
    };
  },
  computed: {
    formError() {
      const regex = RegExp('^(?=.+$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$');
      return {
        name: this.editForm.name.length ? !regex.test(this.editForm.name) : false,
        nameLength: this.editForm.name.length > 20
      };
    }
  },
  methods: {
    async selectFile(type) {
      if (type === 'profile') {
        this.profilePicFile = this.$refs.profilePicFile.files[0];
      } else this.bannerPicFile = this.$refs.bannerPicFile.files[0];
      let reader = new FileReader();
      const self = this;
      reader.onload = e => {
        if (type === 'profile') self.editForm.profilePicture = e.target.result;
        else self.editForm.headerPicture = e.target.result;
      };
      if (type === 'profile') reader.readAsDataURL(this.profilePicFile);
      else reader.readAsDataURL(this.bannerPicFile);
    },
    async uploadImage(type) {
      const formData = new FormData();
      formData.append('picType', 'space');
      if (type === 'profile') {
        try {
          formData.append('file', this.profilePicFile);
          const image = await this.$axios.$post('/api/v1/profilePicUpload', formData);
          this.editForm.profilePicture = image.file;
        } catch (err) {
          console.log(err);
          this.$toast.open({
            duration: 5000,
            message: 'There was an error uploading your profile picture. Please try again.',
            position: 'is-top',
            type: 'is-danger'
          });
        }
      } else {
        try {
          formData.append('file', this.bannerPicFile);
          const image = await this.$axios.$post('/api/v1/bannerPicUpload', formData);
          this.editForm.headerPicture = image.file;
        } catch (err) {
          console.log(err);
          this.$toast.open({
            duration: 5000,
            message: 'There was an error uploading your banner picture. Please try again.',
            position: 'is-top',
            type: 'is-danger'
          });
        }
      }
    },
    async editSpace(editForm) {
      if (this.profilePicture !== editForm.profilePicture) {
        await this.uploadImage('profile');
        if (this.profilePicture.includes('https://kowalla-dev')) {
          const fileName = this.profilePicture.split('profile-pics/')[1];
          await this.$axios.$post('/api/v1/imageDelete', {
            bucket: `kowalla-dev/space/profile-pics`,
            fileName
          });
        }
      }
      if (this.headerPicture !== editForm.headerPicture) {
        await this.uploadImage('banner');
        if (this.headerPicture.includes('https://kowalla-dev')) {
          const fileName = this.profilePicture.split('profile-pics/')[1];
          await this.$axios.$post('/api/v1/imageDelete', {
            bucket: `kowalla-dev/space/banner-pics`,
            fileName
          });
        }
      }
      try {
        let spaceData = await this.$axios.$put(`api/v1/spaces/${this.spaceId}`, {
          name: editForm.name, // will need to update local state
          description: editForm.description,
          profilePicture: editForm.profilePicture,
          headerPicture: editForm.headerPicture
        });
        // update state with changes -> should probably check for changes
        let subObj = {
          name: editForm.name,
          pictureUrl: editForm.profilePicture,
          spaceId: spaceData._id
        };
        this.$store.commit('user/editOwned', subObj);
        this.$router.push({ path: `/beta/space/${editForm.name}` });
      } catch (err) {
        console.log(err);
        this.$toast.open({
          duration: 4000,
          message: err.response.data.errors.username.message,
          position: 'is-top',
          type: 'is-danger'
        });
      }
    }
  }
};
</script>
<style lang="css" scoped>
.box {
    width: 800px;
    max-width: 100%;
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
