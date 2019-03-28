<template>
  <div class="size">
    <div @click="callMobileCreateModal" class="create-button-2">
      <b-icon
        class="dark-basic-theme"
        icon="plus"
        size="is-large"></b-icon>
    </div>
  </div>
</template>
<script>
import MobileCreateModal from '~/components/Modals/Creation/MobileCreateModal';
import CreatePostModal from '~/components/Modals/Creation/createPost/CreatePostModal';

export default {
  name: "MobileFooter",
  components: {
    MobileCreateModal,
  },
  data() {
    return {

    };
  },
  methods: {
    callMobileCreateModal() {
      this.$modal.open({
        parent: this,
        component: MobileCreateModal,
        width: 400,
        hasModalCard: true,
        canCancel: true,
        events: {
          post: () => {
            this.callCreatePostModal();
          },
          community: () => {
            // call community modal
          },

          project: () => {
            // call project modal
          }

        }
      });
    },
    callCreatePostModal() {

      this.$modal.open({
        parent: this,
        component: CreatePostModal,
        width: 400,
        hasModalCard: true,
        canCancel: true,
      });
    }
  }

}
</script>
<style lang="css" scoped>
.size {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 5;
  width: 100%;
}

.dark-basic-theme {
  color: #39C9A0;
}

.create-button {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 0px 10px 10px 0px;
  background-color: white;
  border: 2px solid #2F8168;
  border-radius: 35px;
  height: 70px;
  width: 70px;
  box-shadow: 0 0 10px #333;
}

.create-button-2 {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 0px 10px 10px 0px;
  background-color: white;
  border: 3px solid #2F8168;
  border-radius: 35px;
  height: 70px;
  width: 70px;
  -moz-box-shadow:    3px 3px 0px 0px #000;
  -webkit-box-shadow: 3px 3px 0px 0px #000;
  box-shadow:         3px 3px 0px 0px #000;
}

.kowalla-logo {
  margin-left: 20px;
  font-family: 'Nunito';
  font-size: 2em;
  color: #fff;
  text-decoration: none;
  margin-right: 10px;
}
</style>
