<template lang="html">
  <div v-if="this.$store.state.user.loggedIn" class="navigation-pane-container">
    <Card
      header-string="Projects and Spaces"
      subheader-string="Create a new project or space"
      subheader-on
      subheader-is-button
      header-on
      @subheader-clicked="callCreateSpaceModal"
    >
      <NavCard :profile-subs="this.$store.state.user.profileSubscriptions" type="user" selector="owned" />
    </Card>

    <Card
      header-string="Subscriptions"
      header-on
    >
      <NavCard type="user" selector="subscriptions" />
    </Card>
  </div>
</template>

<script>
import Card from "~/components/Card";
import NavCard from "./NavCard";
import CreateSpaceModal from "~/components/Modals/Creation/CreateSpaceModal";

export default {
  name: "NavPane",
  components: { Card, NavCard, CreateSpaceModal },
  methods: {
    callCreateSpaceModal() {
      this.$modal.open({
        parent: this,
        component: CreateSpaceModal,
        width: 900,
        hasModalCard: true,
      });
    },
  },
};
</script>

<style lang="css" scoped>
.navigation-pane-container {
  width: 18%;
}
</style>
