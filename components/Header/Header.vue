<template lang="html">
  <div>
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

<style lang="css">
</style>
