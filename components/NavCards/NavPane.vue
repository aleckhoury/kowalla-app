<template lang="html">
  <div class="navigation-pane-container">
    <Card
      headerString="Projects and Communities"
      subheaderString="Create a new space"
      subheaderURL="/about"
      subheaderOn
      subheaderIsButton
      @subheader-clicked="callCreateSpaceModal"
      headerOn
    >
      <NavCard type="user" selector="owned"></NavCard>
    </Card>

    <Card
      headerString="Subscriptions"
      subheaderString="More things you'll love"
      subheaderURL="/about"
      subheaderOn
      headerOn
    >
      <NavCard type="user" selector="subscriptions"></NavCard>
    </Card>
  </div>
</template>

<script>
import Card from '~/components/Card';
import NavCard from './NavCard';
import CreateSpaceModal from '~/components/Modals/Creation/CreateSpaceModal';

export default {
  name: "NavPane",
  components: { Card, NavCard, CreateSpaceModal },
  methods: {
    callCreateSpaceModal() {
      this.$modal.open({
        parent: this,
        component: CreateSpaceModal,
        width: 900,
        hasModalCard: true
      });
    }
  }
}
</script>

<style lang="css" scoped>
.navigation-pane-container {
  max-width: 250px;
  width: 100%;
}

</style>
