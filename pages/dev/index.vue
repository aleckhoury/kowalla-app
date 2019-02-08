<template lang="html">
  <div class="screen background-tint">

    <Header></Header>

    <div class="container is-fullhd">
      <!--
          we'll want to dial in the container fullhd breakpoint
          right now it isn't contained to just ultra-wides, and effects
          normal laptop resolution
      -->

      <div class="columns is-centered is-marginless main-margin">
        <div class="column is-one-quarter is-paddingless test-outline side-pane">
          <NavPane></NavPane>
        </div>


        <div class="column is-one-half is-paddingless test-outline">
          post feed
        </div>

        <div class="column is-one-quarter is-paddingless test-outline side-pane">
          info
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header/Header';
import NavPane from '~/components/NavCards/NavPane';

export default {
  name: "test",
  components: { Header, NavPane }
}
</script>

<style lang="css">
</style>
