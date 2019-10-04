<template lang="html">
  <div class="nav-subheader-parent">
    <div class="container is-fullhd full-height">
      <div class="columns is-marginless full-height">
        <div class="column is-one-quarter">
          <!-- placeholder for right alignment -->
        </div>

        <div class="column is-one-half">
          <div class="level full-height">
            <div v-if="isFeed" class="level-left full-height">
              <SortingOptions />
            </div>
            <div :class="[isFeed ? 'level-right' : '', 'level-item', 'full-height']">
              <Tabs :type="headerType" />
            </div>
          </div>
        </div>

        <div class="column is-one-quarter">
          <div class="level full-height">
            <div class="level-left">
              <!-- placeholder for right alignment -->
            </div>

            <div
              v-if="this.$store.state.messages.messages.length > 0"
              class="level-right"
            >
              <div
                v-for="item in this.$store.state.messages.messages"
                :key="item"
                class="level-item"
              >
                <div class="message">
                  <b>{{ item }}</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SortingOptions from "./SortingOptions";
import Tabs from "./Tabs";

export default {
  name: "NavSubHeader",
  components: { SortingOptions, Tabs },
  props: {},
  computed: {
    isFeed() {
      if (this.headerType === 'NewsFeedActiveTab' || this.headerType === 'sortOnly') {
        return true;
      }
    },
    headerType() {
      if (this.$route.path.includes('edit')) return "SettingsActiveTab";
      else if (this.$route.path.includes('posts')) return "Post";
      else if (this.$route.path === '/beta') return "NewsFeedActiveTab";
      return 'sortOnly';
    },
  },
};
</script>

<style lang="css" scoped>
.nav-subheader-parent {
  border-bottom: 2px solid #E0DDDD;
  background-color: white;
  height: 40px;
}

.message {
  font-family: "Helvetica Neue";
  font-size: 1em;
  color: #39C9A0;
  background-color: white;
  padding-left: 12px;
}

.full-height {
  height: 100%;
}
</style>
