<template lang="html">
  <div>
    <div v-if="type === '/u/'" class="sorting-container">
      <el-dropdown @command="handleCommand">
        <div class="dropdown-container">
          <div class="dropdown-selector">
            <b class="font theme-color selector-child">{{ selectedOption }}</b>
            <font-awesome-icon icon="angle-down" class="theme-color selector-child"></font-awesome-icon>
          </div>
        </div>

        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="item in options" :command="item.value">{{ item.value }}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <div v-if="(type === '/p/')||(type === '/u/')" class='font margin predicate'>from</div>

      <div v-if="type === '/c/'" class='font margin predicate'>in</div>

      <div class="font margin subject">
        <b>{{getPrefix}}tob</b>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SortingOptions",
  data() {
    return {
      type: null,
      selectedOption: 'Trending',
      options: [{
          value: 'Trending',
          label: 'Trending'
        }, {
          value: 'Newest',
          label: 'Newest'
        }, {
          value: 'Rising',
          label: 'Rising'
      }],
    }
  },
  methods: {
    handleCommand(command) {
      this.selectedOption = command;
    }
  },
  computed: {
    getPrefix() {
      return ((this.type === '/p/')||(this.type === '/u/')) ?  '@' :  '#';
    }
  },
  created() {
    // sort the current route and see what type of
    // page we're on
    try {
      let re = new RegExp('\/[u,p,c]\/');
      this.type = this.$route.fullPath.match(re)[0]
    } catch {
      this.type = '/'
    }

  }
}
</script>

<style lang="css" scoped>

.sorting-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.dropdown-container {
  height: 25px;
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
