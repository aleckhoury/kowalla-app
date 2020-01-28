<template>
  <div class="modal-content">
    <div class="box">
      <BMenu>
        <BMenuList label="Notifications">
          <div v-for="(item, idx) in notifications.slice(0, 10)" :key="idx" aria-role="listitem">
            <nuxt-link :to="item.link" class="container">
              <div class="profilePic">
                <img :src="item.profilePicture" />
              </div>
              <div class="content" v-html="item.content" />
            </nuxt-link>
          </div>
          <div v-if="!notifications.length" aria-role="listitem">
            <div>
              <strong>No new notifications</strong>
            </div>
          </div>
        </BMenuList>
      </BMenu>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MobileCreateModal',
  props: {
    notifications: { type: Array, default: () => [] },
  },
  watch: {
    async $route() {
      await this.$parent.close();
    },
  },
};
</script>
<style lang="css" scoped>
.menu-list a.icon {
  color: #39C9A0 !important;
}
.modal-content {
  align-self: center;
  border-radius: 6px;
  margin: 0;
  color: #39C9A0;
  width: auto;
}
.container {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  align-items: center;
  justify-items: left;
}
.profilePic img {
  border-radius: 6px;
  height: 48px;
  width: 48px;
}
.content {
  overflow-wrap: break-word;
  color: black;
  padding-left: 10px;
  max-width: 100%;
  height: 100%;
  white-space: normal;
}
</style>
