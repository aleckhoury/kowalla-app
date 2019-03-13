<template lang="html">
  <div class="size">
    <NavHeader/>
    <NavSubHeader/>
  </div>
</template>

<script>
import NavHeader from '~/components/Header/NavHeader/NavHeader';
import NavSubHeader from '~/components/Header/NavSubHeader/NavSubHeader';

/*


*/
export default {
  name: 'Header',
  components: { NavHeader, NavSubHeader, },
};
</script>

<style lang="css" scoped>
.size {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  height: 90px;
  width: 100%;
}


</style>
