<template lang="html">
  <div class="screen background-tint">

    <div class="container is-fullhd">
      <!--
          we'll want to dial in the container fullhd breakpoint
          right now it isn't contained to just ultra-wides, and effects
          normal laptop resolution
      -->

      <div
        :class="{ firstVisit: this.$store.state.firstVisit.firstVisit }"
        class="columns is-centered is-marginless main-margin"
      >
        <!-- post feed -->
        <div class="column is-one-half is-paddingless">
          about
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style lang="css"></style>
