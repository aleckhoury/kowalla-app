<template>
  <div class="modal-content">
    <div class="box is-narrow">

      <div class="center mobile-nav-link-picture">

        <nuxt-link @click.native="closeModal()" to="/dev">
          <div class="general-navigation">
            <font-awesome-icon icon="home" />
            <span><b>Home</b></span>
          </div>
        </nuxt-link>

        <!-- additional generic navigation for later -->
        <!--
          <nuxt-link @click.native="closeModal()" to="/about">
            <div>
              <font-awesome-icon icon="info" />
              <span><b>About</b></span>
            </div>


          </nuxt-link>

          <nuxt-link @click.native="closeModal()"  to="dev/trello">
              <font-awesome-icon :icon="['fab', 'trello']" />
              <span><b>Trello</b></span>
          </nuxt-link>
        -->
      </div>

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

.general-navigation {
  margin-bottom: 10px;
  text-decoration: none;
  color: black;
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
