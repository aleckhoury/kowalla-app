<template>
  <div class="size">
    <div @click="callMobileCreateModal" class="create-button-2">
      <font-awesome-icon
        icon="plus"
        class="dark-basic-theme"
        style="font-size: 24px"
      />
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
  color: white;
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
  background-color: #39C9A0;
  /*border: 3px solid #2F8168;*/
  border-radius: 35px;
  height: 65px;
  width: 65px;
  -moz-box-shadow:    0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);
  -webkit-box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);
  box-shadow:         0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);
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
