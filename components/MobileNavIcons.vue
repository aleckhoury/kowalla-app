<template>
  <div class="columns is-mobile is-marginless">
    <div
      class="column align-icon is-paddingless is-one-third"
      :class="{ 'bottom-border': isPosts, 'normal-border': !isPosts }"
      @click="togglePosts"
    >
      <div class="align-icon">
        <b-icon
          class="padding"
          :class="{ 'theme-color': isPosts }"
          icon="view-quilt"
        />
        <span
          class="padding"
          :class="{ 'theme-color': isPosts }"
        >
          <b>Posts</b>
        </span>
      </div>
    </div>

    <div
      class="column align-icon is-paddingless"
      :class="{ 'bottom-border': isSearch, 'normal-border': !isSearch }"
      @click="toggleSearch"
    >
      <b-icon
        class="dark-basic-theme"
        :class="{ 'theme-color': isSearch }"
        icon="magnify"
      />
    </div>

    <div
      class="column align-icon is-paddingless"
      :class="{ 'bottom-border': isNotif, 'normal-border': !isNotif }"
      @click="toggleNotif"
    >
      <b-icon
        class="dark-basic-theme"
        :class="{ 'theme-color': isNotif }"
        icon="bell-outline"
      />
    </div>

    <div
      class="column align-icon is-paddingless"
      :class="{ 'bottom-border': isMenu, 'normal-border': !isMenu }"
      @click="toggleMenu"
    >
      <b-icon
        class="dark-basic-theme"
        :class="{ 'theme-color': isMenu }"
        icon="dots-horizontal"
      />
    </div>
  </div>
</template>
<script>
import TestModal from '~/components/Modals/Other/TestModal';

export default {
  name: "MobileNavIcon",
  components: { TestModal },
  data() {
    return {
      isPosts: true,
      isSearch: false,
      isNotif: false,
      isMenu: false,
      activeModal: null,
    }
  },
  methods: {
    togglePosts() {
      // set isPosts to true, all else false
      [this.isPosts, this.isSearch, this.isNotif, this.isMenu] = [true, false, false, false];
    },
    toggleSearch() {
      // set isSearch to true, all else false
      [this.isPosts, this.isSearch, this.isNotif, this.isMenu] = [false, true, false, false];

      this.$modal.open({
        parent: this,
        component: TestModal,
        props: { modalText: "Search", modalOpen: this.isSearch },
        width: 300,
        hasModalCard: true
      });

    },
    toggleNotif() {
      // set isNotif to true, all else false
      [this.isPosts, this.isSearch, this.isNotif, this.isMenu] = [false, false, true, false];

      this.$modal.open({
        parent: this,
        component: TestModal,
        props: { modalText: "Notif", modalOpen: this.isNotif },
        width: 300,
        hasModalCard: true
      });
    },
    toggleMenu() {
      // set isMenu to true, all else false
      [this.isPosts, this.isSearch, this.isNotif, this.isMenu] = [false, false, false, true];

      this.$modal.open({
        parent: this,
        component: TestModal,
        props: { modalText: "Menu Options", modalOpen: this.isMenu },
        width: 300,
        hasModalCard: true
      });
    }
  }
}
</script>
<style lang="css" scoped>
.align-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.theme-color {
  color: #39C9A0;
}

.bottom-border {
  border-bottom: 3px solid #39C9A0;
}

.normal-border {
  border-bottom: 3px solid #E0DDDD;
}

.padding {
  padding: 5px;
}
</style>
