<template>
  <div class="modal-content" v-clicked-outside="closeModal">
    <div class="box">
      <!--{{modalText}}-->
      <div v-for="item in notifications" :key="item.notifIds[0]">
        <!-- Notif object -->
        <div @click="getLink(item)">
          <div> <!-- Notif title -->
            <b>{{ item.title }}</b>
          </div>
          <div> <!-- Notif message -->
            {{ item.message }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NotificationModal",
  data() {
    return {
      notifications: []
    }
  },
  methods: {
    closeModal() {
      console.log('closeModal');
      if (this.notifications[0].notifIds[0] !== '') {
        let notifsToDeleteArray = [];
        for (let i in this.notifications) {
          if (this.notifications[i].hasOwnProperty('notifIds')) {
            notifsToDeleteArray = notifsToDeleteArray.concat(this.notifications[i].notifIds);
          }
        }
        this.$axios.delete(`/api/v1/profiles/${this.$store.state.user._id}/notifications`, { data: { notifIds: notifsToDeleteArray }});
      }

      else {}
      this.$parent.close();
    }
  },
  async mounted() {
    let projectIds = this.$store.getters['user/getProjectIds'];
    let notificationRes = await this.$axios.post(`/api/v1/profiles/${this.$store.state.user._id}/notifications`, {projectIdsArray: projectIds})
    console.log(notificationRes)
    if (notificationRes.data.notifications.length === 0) {
      this.notifications = [{ title: "No new notifications", message: "", notifIds: [''] }];
    }

    else {
      this.notifications = notificationRes.data.notifications;
    }
  },
  directives: {
    'clicked-outside': { // can probably make some boilerplate
      bind: function(el, binding, vNode) {
        // Provided expression must evaluate to a function.
        if (typeof binding.value !== 'function') {
        	const compName = vNode.context.name
          let warn = `[Vue-click-outside:] provided expression '${binding.expression}' is not a function, but has to be`
          if (compName) { warn += `Found in component '${compName}'` }

          console.warn(warn)
        }
        // Define Handler and cache it on the element
        const bubble = binding.modifiers.bubble
        const handler = (e) => {
          if (bubble || (!el.contains(e.target) && el !== e.target)) {
          	binding.value(e);
          }
        }
        el.__vueClickOutside__ = handler

        // add Event Listeners
        document.addEventListener('click', handler)
			},

      unbind: function(el, binding) {
        // Remove Event Listeners
        document.removeEventListener('click', el.__vueClickOutside__)
        el.__vueClickOutside__ = null

      }
    }
  }

}
</script>
<style lang="css" scoped>
.box {
    margin: 25px;
    max-width: 100%;
    text-align: center;
}
.modal-content {
    border-radius: 6px;
    margin: 0;
    color: #39C9A0;
    width: auto;
}
</style>
