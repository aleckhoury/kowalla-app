<template lang="html">
  <div>
    <div class="sorting-container">
      <b-dropdown class="dropdown-container" hoverable aria-role="list">
        <b class="font theme-color selector-child" slot="trigger">
          {{ sort }}
          <font-awesome-icon
                  icon="angle-down"
                  class="theme-color selector-child"/>
        </b>

        <b-dropdown-item :value="true" @click="handleCommand('Newest')" aria-role="listitem">Newest</b-dropdown-item>
        <b-dropdown-item :value="false" @click="handleCommand('Oldest')" aria-role="listitem">Oldest</b-dropdown-item>
      </b-dropdown>
      <div v-if="(type === '/p/')||(type === '/u/')" class='font margin predicate'>from</div>
      <div v-if="(type === '/c/')||(type === '/')" class='font margin predicate'>in</div>
      <div v-if="(type !== '/')"class="font margin subject"><b>{{getPrefix}}{{getSuffix}}</b></div>
      <div v-if="(type === '/')" class='font margin predicate'>your timeline</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SortingOptions',
  data() {
    return {
      type: null,
      target: null,
      options: [{
          value: 'Trending',
          label: 'Trending',
        },
        {
          value: 'Newest',
          label: 'Newest',
        },
        {
          value: 'Rising',
          label: 'Rising'
      }],
    }
  },
  methods: {
    handleCommand(command) {
      // this.selectedOption = command;
      if (this.type === '/p/') {
        this.$store.commit('sorting/updateProjectSortingOption', command);
      }
      else if (this.type === '/u/') {
        this.$store.commit('sorting/updateProfileSortingOption', command);
      }
      else if (this.type === '/c/') {
        this.$store.commit('sorting/updateCommunitySortingOption', command);
      }
      else {
        this.$store.commit('sorting/updateNewsfeedSortingOption', command);
      }
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
      return this.$store.state.sorting[pageType];
    }
  },
  created() {
    // sort the current route and see what type of
    // page we're on
    try {
      let re = new RegExp('/[u,p,c]/');
      this.type = this.$route.fullPath.match(re)[0];
      //
      // if (this.type === '/p/') {
      //   this.selectedOption = this.$store.state.sorting.project;
      // }
      //
      // else if (this.type === '/u/') {
      //   this.selectedOption = this.$store.state.sorting.profile;
      // } else if (this.type === '/c/') {
      //   this.selectedOption = this.$store.state.sorting.community;
      // }

    } catch {
      this.type = '/';
      // this.selectedOption = this.$store.state.sorting.newsfeed;
    }
  },
};
</script>

<style lang="css" scoped>
.sorting-container {
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
