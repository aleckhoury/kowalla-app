<template>
  <BButton :class="classes" class="sub-button" @click="handleClick">
    <b>{{ getText }}</b>
  </BButton>
</template>
<script>
export default {
  // TODO: subscription button has blue outline after interactions, need to fix
  name: 'SubscriptionButton',
  props: {
    isSubscribed: { type: Boolean, default: false },
    isProject: { type: Boolean, default: false },
    id: { type: String, default: '' },
  },
  computed: {
    classes() {
      return {
        'is-subscribed': this.isSubscribed,
        'is-not-subscribed': !this.isSubscribed,
      };
    },
    getText() {
      return this.isSubscribed ? 'Subscribed' : 'Subscribe';
    },
  },
  methods: {
    handleClick() {
      if (this.isSubscribed) {
        const type = this.isProject ? 'projects' : 'spaces';
        this.$axios.$delete(`/api/v1/profiles/${this.$store.state.user._id}/subs/${type}/${this.id}`);
      } else {
        this.$axios.$post(`/api/v1/profiles/${this.$store.state.user._id}/subs`, {
          projectId: this.isProject ? this.id : undefined,
          spaceId: this.isProject ? undefined : this.id,
        });
      }
      this.$emit('subscription-button-clicked', !this.isSubscribed);
    },
  },
};
</script>
<style lang="css" scoped>
.sub-button {
  margin: 6px;
  color: #0a2049;
  border: 1px solid #0a2049;
  background-color: white;

  font-size: 0.875em;
}
.button.is-black.is-inverted.is-outlined {
  /*background-color: #39C9A0;*/
  /*color: white;*/
}

.is-subscribed {
  color: white;
  border: 1px solid white;
  background-color: #0a2049;
}

.is-subscribed:hover{
  color: #0a2049;
  background-color: white;
}

.is-not-subscribed:hover{
  color: white;
  background-color: #0a2049;
}
</style>
