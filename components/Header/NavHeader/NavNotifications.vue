<template lang="html">
  <!-- TODO want to put a badge here for notification dot -->
  <font-awesome-icon
    icon="bell"
    class="theme-color margin"/>

</template>

<script>
export default {
  name: 'NavNotifications',
  props: { hasNotifications: Boolean, },
};
</script>

<style lang="css" scoped>
.theme-color {
  color: #2F8168;
}

.margin {
  margin: 6px;
}
</style>
