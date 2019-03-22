<template>
  <div class="size">
    <div class="kowalla-logo">
      kowalla
    </div>
    <div @click="callMobileCreateModal" class="create-button">
      <b-icon
        class="dark-basic-theme"
        icon="plus"
        size="is-large"></b-icon>
    </div>
  </div>
</template>
<script>
import MobileCreateModal from '~/components/Modals/Creation/MobileCreateModal';
import CreatePostModal from '~/components/Modals/Creation/CreatePostModal';

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
  background-color: #39C9A0;
  border-top: 2px solid #2F8168;
  bottom: 0;
  left: 0;
  z-index: 5;
  height: 50px;
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

.kowalla-logo {
  margin-left: 20px;
  font-family: 'Nunito';
  font-size: 2em;
  color: #fff;
  text-decoration: none;
  margin-right: 10px;
}
</style>
