<template lang="html">
  <el-badge :is-dot="hasNotifications" class="notif-dot">
    <font-awesome-icon icon="bell" class="theme-color"></font-awesome-icon>
  </el-badge>
</template>

<script>
export default {
  name: "NavNotifications",
  props: { hasNotifications: Boolean }
}
</script>

<style lang="css" scoped>
.notif-dot {
  margin: 6px;
}

.theme-color {
  color: #2F8168;
}
</style>
