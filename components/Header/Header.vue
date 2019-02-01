<template lang="html">
  <div class="test-outline">
    <NavHeader/>
    <NavSubHeader/>
  </div>
</template>

<script>
import NavHeader from '~/components/Header/NavHeader/NavHeader';
import NavSubHeader from '~/components/Header/NavSubHeader/NavSubHeader';

export default {
  name: 'Header',
  components: { NavHeader, NavSubHeader, },
};
</script>

<style lang="css" scoped>
.test-outline {
  height: 90px;
}
</style>
