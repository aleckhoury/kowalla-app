<template>
  <div class="size">
    <div v-if="hasActivePost && !isFocusPage" class="create-button">
      <nuxt-link :to="`/beta/focus/${this.$store.state.user.username}`">
        <strong class="has-text-white is-size-5">LIVE</strong>
      </nuxt-link>
    </div>
    <div v-else-if="!isFocusPage" class="create-button" @click="callMobileCreateModal">
      <font-awesome-icon icon="plus" class="dark-basic-theme" style="font-size: 24px" />
    </div>
  </div>
</template>
<script>
import MobileCreateModal from '~/components/Modals/Creation/MobileCreateModal';
import CreatePostMobile from '~/components/Modals/Creation/CreatePostMobile';
import CreateSpaceModal from '~/components/Modals/Creation/CreateSpaceModal';
import LoginHandler from '~/components/Auth/LoginHandler';
import { mapGetters } from 'vuex';

export default {
  name: 'MobileFooter',
  computed: {
    ...mapGetters('coworkers', ['hasActivePost']),
    isFocusPage() {
      return this.$route.path.includes('focus');
    },
  },
  methods: {
    callMobileCreateModal() {
      if (!this.$store.state.user.loggedIn) {
        return this.$modal.open({
          parent: this,
          component: LoginHandler,
          width: 900,
          hasModalCard: true,
        });
      } else {
        this.$modal.open({
          parent: this,
          component: MobileCreateModal,
          width: 400,
          hasModalCard: true,
          canCancel: true,
          events: {
            post: () => {
              this.$modal.open({
                parent: this,
                component: CreatePostMobile,
                width: 400,
                hasModalCard: true,
                canCancel: true,
              });
            },
            space: () => {
              this.$modal.open({
                parent: this,
                component: CreateSpaceModal,
                width: 900,
                hasModalCard: true,
                props: { type: 1 },
              });
            },
            project: () => {
              this.$modal.open({
                parent: this,
                component: CreateSpaceModal,
                width: 900,
                hasModalCard: true,
                props: { type: 0 },
              });
            },
          },
        });
      }
    },
  },
};
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
  background-color: #39C9A0;
  /*border: 3px solid #2F8168;*/
  border-radius: 35px;
  height: 65px;
  width: 65px;
  -moz-box-shadow:    0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);
  -webkit-box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);
  box-shadow:         0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);
}
</style>
