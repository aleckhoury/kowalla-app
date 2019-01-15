<template lang="html">
  <div class="nav-header-container">
    <NavHeaderLeft></NavHeaderLeft>
    <NavHeaderRight></NavHeaderRight>
  </div>
</template>

<script>
import NavHeaderLeft from './NavHeaderLeft';
import NavHeaderRight from './NavHeaderRight';

export default {
  name: "NavHeader",
  components: { NavHeaderLeft, NavHeaderRight }
}
</script>

<style lang="css" scoped>
.nav-header-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 55px;
  padding-left: 60px;
  padding-right: 60px;
  background-color: #39C9A0;
  border: 1px solid #2F8168;
}
</style>
