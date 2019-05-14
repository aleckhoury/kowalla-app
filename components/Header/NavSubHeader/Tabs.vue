<template>
  <b-tabs :value="activeTab" position="is-right" @change="changeTab">
    <b-tab-item v-for="(tab, idx) in tabs" :label="tab" :key="idx"></b-tab-item>
  </b-tabs>
</template>

<script>
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
      } else {
        return this.settingsOptions;
      }
    },
    activeTab() {
      return this.$store.state.activeTabs[this.type];
    },
  },
  methods: {
    changeTab(idx) {
        this.$store.commit(`activeTabs/update${this.type}`, idx);
    },
  },
};
</script>

<style scoped></style>
