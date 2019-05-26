<template>
  <button :class="getClasses" class="sub-button" @click="handleClick">
    <b>{{ getText }}</b>
  </button>
</template>
<script>
export default {
  // TODO: subscription button has blue outline after interactions, need to fix
  name: "SubscriptionButton",
  props: {
    isSubscribed: { type: Boolean, default: false },
    isProject: { type: Boolean, default: false },
    id: { type: String, default: "" },
  },
  computed: {
    getClasses() {
      return {
        "is-subscribed": this.isSubscribed,
        "is-not-subscribed": !this.isSubscribed,
      };
    },
    getText() {
      return this.isSubscribed ? "Subscribed" : "Subscribe";
    },
  },
  methods: {
    handleClick() {
      if (this.isSubscribed) {
        const type = this.isProject ? "projects" : "communities";
        this.$axios.$delete(
          `/api/v1/profiles/${this.$store.state.user._id}/subs/${type}/${
            this.id
          }`
        );
      } else {
        this.$axios.$post(
          `/api/v1/profiles/${this.$store.state.user._id}/subs`,
          {
            projectId: this.isProject ? this.id : undefined,
            communityId: this.isProject ? undefined : this.id,
          }
        );
      }
      this.$emit("subscription-button-clicked", !this.isSubscribed);
    },
  },
};
</script>
<style lang="css" scoped>
.sub-button {
  height: 45px;
  width: 180px;
  border-radius: 6px;
  border: 2px solid #2F8168;
  margin: 6px;
  font-family: "Helvetica Neue";
  font-size: 0.875em;
  cursor: pointer;
}

.sub-button:focus {
  outline: none;
}

.is-subscribed {
  color: white;
  background-color: #39C9A0;
}

.is-subscribed:hover{
  border: 2px solid white;
}

.is-not-subscribed {
  color: #39C9A0;
  background-color: white;
}

.is-not-subscribed:hover{
  border: 2px solid #39C9A0;
}
</style>
