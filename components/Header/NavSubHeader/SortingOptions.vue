<template lang="html">
  <div class="sorting">
    <div v-if="isMobile" class="sortIcons">
      <font-awesome-icon v-if="this.$store.state.sorting.feed === 'Newest'" icon="sort-amount-down" @click="handleCommand('Oldest')" />
      <font-awesome-icon v-else icon="sort-amount-up" @click="handleCommand('Newest')" />
    </div>
    <b-dropdown v-else class="dropdown-container" aria-role="list" hoverable>
      <div slot="trigger" class="dropdown-selector">
        <b class="font theme-color">{{ this.$store.state.sorting.feed }}</b>
        <font-awesome-icon icon="angle-down" class="theme-color selector-child" />
      </div>
      <b-dropdown-item v-for="item in options" :key="item.value" :value="item.value" aria-role="listitem" @click="handleCommand(item.value)">
        {{ item.value }}
      </b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
export default {
  name: 'SortingOptions',
  props: {
    isMobile: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      type: null,
      dropdownOpen: false,
      target: null,
      options: [
        {
          value: 'Newest',
        },
        {
          value: 'Oldest',
        },
      ],
    };
  },
  computed: {},
  created() {
    try {
      let re = new RegExp('/[user,project,space]/');
      this.type = this.$route.fullPath.match(re)[0];
    } catch {
      this.type = '/';
    }
  },
  methods: {
    handleCommand(value) {
      this.$store.commit('sorting/updateFeedSort', value);
    },
  },
};
</script>

<style lang="css" scoped>
.sorting {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.dropdown-selector {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.selector-child {
  margin-top: 1px;
  margin-left: 5px;
  margin-right: 5px;
}

.sorting {
   cursor: pointer;
   color: #409EFF;
 }

 .font {

 }

 .subject {
   font-size: 1.25em;
   color: #39C9A0;
 }

 .predicate {
   font-size: 1em;
   color: #999;
 }

 .theme-color {
   color: #39C9A0;
 }
.sortIcons {
  color: #999;
  font-size: 1.8em;
  position: absolute;
  right: 10px;
}
</style>
