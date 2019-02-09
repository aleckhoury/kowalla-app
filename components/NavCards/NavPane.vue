<template lang="html">
  <div class="navigation-pane-container">
    <Card
      headerString="Projects and Communities"
      subheaderString="Create a new space"
      subheaderURL="/about"
      subheaderOn
      headerOn
    >
      <NavCard type="owned"></NavCard>
    </Card>

    <Card
      headerString="Subscriptions"
      subheaderString="More things you'll love"
      subheaderURL="/about"
      subheaderOn
      headerOn
    >
      <NavCard type="subscriptions"></NavCard>
    </Card>
  </div>
</template>

<script>
import Card from '~/components/Card';
import NavCard from './NavCard';

export default {
  name: "NavPane",
  components: { Card, NavCard }
}
</script>

<style lang="css" scoped>
.navigation-pane-container {
  max-width: 250px;
  width: 100%;
}

</style>
