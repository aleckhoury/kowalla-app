<template>
  <div class="modal-content">
    <div class="box is-narrow">
      <span class="header-content"><b>Your Projects and Communities</b></span>
      <NavCard
        type="user" selector="owned"
        @nav-card-link-clicked="closeModal()"
      ></NavCard>

      <span class="header-content"><b>Your Subscriptions</b></span>
      <NavCard type="user" selector="subscriptions"></NavCard>
      <!--<NavPane class="force-width"></NavPane>-->
    </div>
  </div>
</template>
<script>
import NavPane from '~/components/NavCards/NavPane';
import NavCard from '~/components/NavCards/NavCard';

export default {
  name: "ChangeLocationModal",
  components: { NavCard, NavPane },
  methods: {
    closeModal() {
      console.log('closing parent');
      this.$parent.close();
    }
  },
}
</script>
<style lang="css" scoped>
.box {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.modal-content {
    border-radius: 6px;
    margin: 0;
    color: #39C9A0;
    width: auto;
}

.header-content {
  font-family: "Helvetica Neue";
  font-size: 1em;
  color: black;
}

</style>
