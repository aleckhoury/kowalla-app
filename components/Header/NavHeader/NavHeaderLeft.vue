<template lang="html">
  <div class="nav-left-container">
    <nuxt-link
      class="kowalla-logo"
      to="/dev">kowalla</nuxt-link>
    <nuxt-link
      class="page-link"
      to="/dev"><b>Home</b></nuxt-link>
    <nuxt-link
      class="page-link"
      to="/about"><b>About</b></nuxt-link>
    <nuxt-link
      class="page-link"
      to="/about"><b>About</b></nuxt-link>
    <div class="page-link">
      <b>Help</b>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavHeaderLeft',
};
</script>

<style lang="css" scoped>
.nav-left-container {
  display: flex;
  align-items: center;
}

.kowalla-logo {
  font-family: 'Nunito';
  font-size: 2.25em;
  color: #fff;
  text-decoration: none;
  margin-right: 10px;
}

.page-link {
  font-family: "Helvetica Neue";
  font-size: 1em;
  color: #2F8168;
  text-decoration: none;
  padding: 6px;
}
</style>
