<template lang="html">
  <b-dropdown
    position="is-bottom-left"
    aria-role="list"
    mobile-modal
    @active-change="notifsSelected"
  >
    <font-awesome-icon
      slot="trigger"
      :class="{
        'has-notifs': hasNotifications,
        'theme-color': !hasNotifications,
      }"
      icon="bell"
      class="margin"
    />
    <b-dropdown-item
      v-for="item in notifications"
      :key="item.notifIds[0]"
      aria-role="listitem"
    >
      <!-- Notif object -->
      <div @click="getLink(item)">
        <div>
          <!-- Notif title -->
          <b>{{ item.title }}</b>
        </div>
        <div>
          <!-- Notif message -->
          {{ item.message }}
        </div>
      </div>
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
export default {
  name: "NavNotifications",
  props: { hasNotifications: { type: Boolean, default: false } },
  data() {
    return {
      notifications: [],
    };
  },
  methods: {
    async notifsSelected(bool) {
      if (bool) {
        let projectIds = this.$store.getters["user/getProjectIds"];
        let notificationRes = await this.$axios.$post(
          `/api/v1/profiles/${this.$store.state.user._id}/notifications`,
          { projectIdsArray: projectIds }
        );

        if (notificationRes.notifications.length === 0) {
          this.notifications = [
            { title: "No new notifications", message: "", notifIds: [""] },
          ];
        } else {
          this.notifications = notificationRes.notifications;
        }
        //
      } else {
        //delete the seen notifications
        if (this.notifications[0].notifIds[0] !== "") {
          let notifsToDeleteArray = [];
          for (let i in this.notifications) {
            if (this.notifications[i].hasOwnProperty("notifIds")) {
              notifsToDeleteArray = notifsToDeleteArray.concat(
                this.notifications[i].notifIds
              );
            }
          }
          this.$axios.$delete(
            `/api/v1/profiles/${this.$store.state.user._id}/notifications`,
            { data: { notifIds: notifsToDeleteArray } }
          );
        }
      }
    },
    getLink(item) {
      if (item.hasOwnProperty("spaceName")) {
        // eventually, we'll want to direct right to the comment in question
        if (item.hasOwnProperty("commentId") && item.hasOwnProperty("postId")) {
          this.$router.push({
            path: `/beta/space/${item.spaceName}/posts/${item.postId}`,
          });
        } else if (
          !item.hasOwnProperty("commentId") &&
          item.hasOwnProperty("postId")
        ) {
          this.$router.push({
            path: `/beta/space/${item.spaceName}/posts/${item.postId}`,
          });
        }
      } else if (item.hasOwnProperty("projectName")) {
        this.$router.push({
          path: `/beta/project/${item.projectName}`,
        });
      }
    },
  },
};
</script>

<style lang="css" scoped>
.theme-color {
  color: #2F8168;
}

.has-notifs {
  color: white;
}

.margin {
  margin: 6px;
}
</style>
