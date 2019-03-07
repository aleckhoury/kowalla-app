<template>
  <div class="columns is-mobile is-marginless">
    <div
      class="column align-icon is-paddingless is-one-third"
      :class="{ 'bottom-border': isPosts }"
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
      class="column align-icon"
      :class="{ 'bottom-border': isSearch }"
      @click="toggleSearch"
    >
      <b-icon
        class="dark-basic-theme"
        :class="{ 'theme-color': isSearch }"
        icon="magnify"
      />
    </div>

    <div
      class="column align-icon"
      :class="{ 'bottom-border': isNotif }"
      @click="toggleNotif"
    >
      <b-icon
        class="dark-basic-theme"
        :class="{ 'theme-color': isNotif }"
        icon="bell-outline"
      />
    </div>

    <div
      class="column align-icon"
      :class="{ 'bottom-border': isMenu }"
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
      this.isPosts = true;
      this.isSearch = false;
      this.isNotif = false;
      this.isMenu = false;
    },
    toggleSearch() {
      this.isPosts = false;
      this.isSearch = true;
      this.isNotif = false;
      this.isMenu = false;

      this.$modal.open({
        parent: this,
        component: TestModal,
        props: { modalText: "Search", modalOpen: this.isSearch },
        width: 300,
        hasModalCard: true
      });
    },
    toggleNotif() {
      this.isPosts = false;
      this.isSearch = false;
      this.isNotif = true;
      this.isMenu = false;

      this.$modal.open({
        parent: this,
        component: TestModal,
        props: { modalText: "Notif", modalOpen: this.isNotif },
        width: 300,
        hasModalCard: true
      });
    },
    toggleMenu() {
      this.isPosts = false;
      this.isSearch = false;
      this.isNotif = false;
      this.isMenu = true;

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

.bottom-border{
  border-bottom: 3px solid #39C9A0;
}

.padding {
  padding: 5px;
}
</style>
