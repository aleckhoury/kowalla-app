<template lang="html">
  <div v-if="this.$store.state.user.loggedIn" class="navigation-pane-container">
    <CardContainer
      header-string="Projects and Spaces"
      subheader-string="Create a new project or space"
      subheader-on
      subheader-is-button
      header-on
      @subheader-clicked="callCreateSpaceModal">
      <NavCard type="user" selector="owned" />
    </CardContainer>
  </div>
</template>

<script>
import CardContainer from "~/components/SidePaneCards/CardContainer";
import NavCard from "./NavCard";
import CreateSpaceModal from "~/components/Modals/Creation/CreateSpaceModal";

export default {
  name: "NavPane",
  components: { CardContainer, NavCard, CreateSpaceModal },
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
