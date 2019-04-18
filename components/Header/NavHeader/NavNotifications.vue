<template lang="html">
  <b-dropdown position="is-bottom-left" aria-role="list" @active-change="notifsSelected" mobile-modal>
    <fa
      icon="bell"
      class="margin"
      :class="{ 'has-notifs': hasNotifications, 'theme-color': !hasNotifications }"
      slot="trigger"
    />
    <b-dropdown-item
      v-for="item in notifications"
      aria-role="listitem"
      :key="item.notifIds[0]"
    >
      <!-- Notif object -->
      <div @click="getLink(item)">
        <div> <!-- Notif title -->
          <b>{{ item.title }}</b>
        </div>
        <div> <!-- Notif message -->
          {{ item.message }}
        </div>
      </div>
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
export default {
  name: 'NavNotifications',
  props: { hasNotifications: Boolean, },
  data() {
    return {
      notifications: []
    }
  },
  methods: {
    async notifsSelected(bool) {
      if (bool) {
        let projectIds = this.$store.getters['user/getProjectIds'];
        let notificationRes = await this.$axios.post(`/api/v1/profiles/${this.$store.state.user._id}/notifications`, {projectIdsArray: projectIds})

        if (notificationRes.data.notifications.length === 0) {
          this.notifications = [{ title: "No new notifications", message: "", notifIds: [''] }];
        }

        else {
          this.notifications = notificationRes.data.notifications;
        }
        //
      } else {
        //delete the seen notifications
        if (this.notifications[0].notifIds[0] !== '') {
          let notifsToDeleteArray = [];
          for (let i in this.notifications) {
            if (this.notifications[i].hasOwnProperty('notifIds')) {
              notifsToDeleteArray = notifsToDeleteArray.concat(this.notifications[i].notifIds);
            }
          }
          this.$axios.$delete(`/api/v1/profiles/${this.$store.state.user._id}/notifications`, { data: { notifIds: notifsToDeleteArray }});
        }

        else {}
      }
    },
    getLink(item) {
      if (item.hasOwnProperty('communityName')) {
        // eventually, we'll want to direct right to the comment in question
        if ((item.hasOwnProperty('commentId')) && (item.hasOwnProperty('postId'))) {
          this.$router.push({
            path: `/dev/c/${item.communityName}/posts/${item.postId}`
          });
        }

        else if ((!item.hasOwnProperty('commentId')) && (item.hasOwnProperty('postId'))) {
          this.$router.push({
            path: `/dev/c/${item.communityName}/posts/${item.postId}`
          });
        }
      }

      else if (item.hasOwnProperty('projectName')) {
        this.$router.push({
          path: `/dev/p/${item.projectName}`
        });
      }
    }
  }
}
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
