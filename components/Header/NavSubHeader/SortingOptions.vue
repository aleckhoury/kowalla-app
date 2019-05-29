<template lang="html">
  <div class="sorting">
    <div>
      <b-dropdown :position="isMobile ? 'is-bottom-left' : null" class="dropdown-container" hoverable aria-role="list">
        <div slot="trigger" class="dropdown-selector">
          <b class="font theme-color selector-child">{{ sort }}</b>
          <font-awesome-icon
            icon="angle-down"
            class="theme-color selector-child"
          />
        </div>
        <b-dropdown-item
          v-for="item in options"
          :value="item.value"
          :key="item.value"
          aria-role="listitem"
          @click="handleCommand(item.value)"
        >
          {{ item.value }}
        </b-dropdown-item>
      </b-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "SortingOptions",
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
          value: "Newest",
        },
        {
          value: "Oldest",
        },
      ],
    };
  },
  computed: {
    sort() {
      let pageType;
      switch (this.type) {
        case "/project/":
          pageType = "project";
          break;
        case "/user/":
          pageType = "profile";
          break;
        case "/community/":
          pageType = "community";
          break;
        case "/":
          pageType = "newsfeed";
          break;
      }
      if (process.browser) {
        return this.$store.state.sorting[pageType];
      } else {
        return "";
      }
    },
  },
  created() {
    try {
      let re = new RegExp("/[user,project,community]/");
      this.type = this.$route.fullPath.match(re)[0];
    } catch {
      this.type = "/";
    }
  },
  methods: {
    handleCommand(value) {
      // this.selectedOption = command;
      if (this.type === "/project/") {
        this.$store.commit("sorting/updateProjectSortingOption", value);
      } else if (this.type === "/user/") {
        this.$store.commit("sorting/updateProfileSortingOption", value);
      } else if (this.type === "/community/") {
        this.$store.commit("sorting/updateCommunitySortingOption", value);
      } else {
        this.$store.commit("sorting/updateNewsfeedSortingOption", value);
      }
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

.dropdown-container {
  height: 30px;
  border: 2px solid #39C9A0;
  border-radius: 6px;
  cursor: pointer;
}

.dropdown-selector {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 5px;
  margin-left: 5px;
}

.margin {
  margin-left: 5px;
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
   font-family: "Helvetica Neue";
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
</style>
