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

        <!-- post feed -->
        <div class="column is-one-half is-paddingless">
          about
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header/Header';

export default {
  name: 'About',
  components: { Header },
};
</script>

<style lang="css">
</style>
