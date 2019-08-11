<template>
  <b-tabs
    :value="activeTab"
    :destroy-on-hide="false"
    position="is-right"
    @change="changeTab"
  >
    <b-tab-item v-for="(tab, idx) in tabs" :label="tab" :key="idx"></b-tab-item>
  </b-tabs>
</template>

<script>
import LoginAndRegisterModal from "~/components/Auth/LoginAndRegisterModal";

export default {
  name: "Tabs",
  props: {
    type: { type: String, default: "NewsFeedActiveTab" },
  },
  data() {
    return {
      feedOptions: ["All", "Subscribed"],
      settingsOptions: ["General", "Integrations"],
    };
  },
  computed: {
    tabs() {
      if (this.type === "NewsFeedActiveTab") {
        return this.feedOptions;
      } else if (this.type === "SettingsActiveTab") {
        return this.settingsOptions;
      } else {
        return [];
      }
    },
    activeTab() {
      return this.$store.state.activeTabs[this.type] || 0;
    },
  },
  methods: {
    changeTab(idx) {
      if (!this.$store.state.user.loggedIn) {
        return this.$modal.open({
          parent: this,
          component: LoginAndRegisterModal,
          width: 900,
          hasModalCard: true,
          props: {
            initialState: false,
          },
        });
      }
        this.$store.commit(`activeTabs/update${this.type}`, idx);
    },
  },
};
</script>

<style scoped></style>
