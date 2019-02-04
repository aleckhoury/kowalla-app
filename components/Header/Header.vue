<template lang="html">
  <div class="size">
    <NavHeader2/>
    <NavSubHeader3/>
  </div>
</template>

<script>
import NavHeader2 from '~/components/Header/NavHeader/NavHeader2';
import NavSubHeader3 from '~/components/Header/NavSubHeader/NavSubHeader3';

/*


*/
export default {
  name: 'Header',
  components: { NavHeader2, NavSubHeader3, },
};
</script>

<style lang="css" scoped>
.size {
  height: 90px;
  width: 100%;
}


</style>
