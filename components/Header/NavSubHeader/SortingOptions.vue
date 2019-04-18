<template lang="html">
  <div class="sorting">
    <div>
      <b-dropdown class="dropdown-container" hoverable aria-role="list">
        <div slot="trigger" class="dropdown-selector">
            <b class="font theme-color selector-child">{{ sort }}</b>
          <fa
              icon="angle-down"
              class="theme-color selector-child"/>
        </div>
          <b-dropdown-item v-for="item in options" @click="handleCommand(item.value)" aria-role="listitem" :value="item.value" :key="item.value">
              {{ item.value }}
          </b-dropdown-item>
      </b-dropdown>
    </div>
    <div v-if="(!isMobile) && ((type === '/p/')||(type === '/u/'))" class='font margin predicate'>from</div>
    <div v-if="(!isMobile) && ((type === '/c/')||(type === '/'))" class='font margin predicate'>in</div>
    <div v-if="(!isMobile) && (type !== '/')"class="font margin subject"><b>{{getPrefix}}{{getSuffix}}</b></div>
    <div v-if="(!isMobile) && (type === '/')" class='font margin predicate'>your timeline</div>
  </div>
</template>

<script>
export default {
  name: 'SortingOptions',
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
      }],
    }
  },
  methods: {
    handleCommand(value) {
      // this.selectedOption = command;
      if (this.type === '/p/') {
        this.$store.commit('sorting/updateProjectSortingOption', value);
      }
      else if (this.type === '/u/') {
        this.$store.commit('sorting/updateProfileSortingOption', value);
      }
      else if (this.type === '/c/') {
        this.$store.commit('sorting/updateCommunitySortingOption', value);
      }
      else {
        this.$store.commit('sorting/updateNewsfeedSortingOption', value);
      }
    }
  },
  props: {
    isMobile: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    getPrefix() {
      return ((this.type === '/p/')||(this.type === '/u/')) ?  '@' :  '#';
    },

    getSuffix() {
      if (this.type === '/p/') {
        return this.$route.params.projectname;
      }

      else if (this.type === '/u/') {
        return this.$route.params.username;
      }

      else if (this.type === '/c/') {
        return this.$route.params.communityname;
      }

      else {
        return '';
      }
    },
    sort() {
      let pageType;
      switch(this.type) {
        case '/p/':
          pageType = 'project';
          break;
        case '/u/':
          pageType = 'profile';
          break;
        case '/c/':
          pageType = 'community';
          break;
        case '/':
          pageType = 'newsfeed';
          break;
      }
      if (process.browser) {
        return this.$store.state.sorting[pageType];
      } else {
        return '';
      }
    }
  },
  created() {
    try {
      let re = new RegExp('/[u,p,c]/');
      this.type = this.$route.fullPath.match(re)[0];
    } catch {
      this.type = '/';
    }
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
