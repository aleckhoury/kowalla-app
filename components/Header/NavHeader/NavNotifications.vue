<template lang="html">
  <b-dropdown position="is-bottom-left" aria-role="list" class="level-item" mobile-modal @active-change="viewNotifications">
    <div v-if="viewedNotifications.length" slot="trigger" class="circle">{{ viewedNotifications.length }}</div>
    <font-awesome-icon v-else slot="trigger" icon="bell" class="notif-icon" />
    <b-dropdown-item v-for="(item, idx) in notifications.slice(0, 10)" :key="idx" aria-role="listitem">
      <nuxt-link :to="item.link" class="container">
        <div class="profilePic">
          <img :src="item.profilePicture" />
        </div>
        <!-- eslint-disable-next-line -->
        <div class="content" v-html="item.content" />
      </nuxt-link>
    </b-dropdown-item>
    <b-dropdown-item v-if="!notifications.length" aria-role="listitem">
      <div>
        <strong>No new notifications</strong>
      </div>
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
export default {
  name: 'NavNotifications',
  data() {
    return {
      notifications: [],
    };
  },
  computed: {
    viewedNotifications() {
      return this.notifications.filter(x => x.viewed === false);
    },
  },
  watch: {
    async $route(to, from) {
      await this.getNotifications();
    },
  },
  async mounted() {
    await this.getNotifications();
  },
  methods: {
    async getNotifications() {
      let { result } = await this.$axios.$post(`/api/v1/profiles/${this.$store.state.user._id}/notifications`);
      this.notifications = result;
    },
    viewNotifications(isActive) {
      if (isActive && this.notifications.length) {
        this.notifications.forEach(x => (x.viewed = true));
        let viewedNotifs = [];
        for (let i in this.notifications) {
          if (this.notifications[i]._id) {
            viewedNotifs = viewedNotifs.concat(this.notifications[i]._id);
          }
        }
        this.$axios.$put(`/api/v1/profiles/${this.$store.state.user._id}/notifications`, { data: { notifIds: viewedNotifs } });
      }
    },
  },
};
</script>

<style lang="css" scoped>
.notif-icon {
  height: 21px;
  width: auto !important;
  color: #2F8168;
}
.circle {
  background-color: #ac28da;
  color: white;
  align-items: center;
  border-radius: 20px;
  display: flex;
  font-size: 12px;
  height: 22px;
  justify-content: center;
  text-transform: uppercase;
  width: 22px;
}
.container {
  width: 325px;
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
.dropdown-item {
  padding-right: 1rem;
}
</style>
