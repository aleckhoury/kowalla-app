<template lang="html">

  <div>
    <b-autocomplete
      v-model="search"
      class="searchbar-container"
      placeholder="Search"
      icon="magnify"
      @select="option => selected = option">
      <template slot="empty">No results found</template>
    </b-autocomplete>
  </div>

  <!--
    <el-autocomplete
      :fetch-suggestions="querySearchAsync"
      class="searchbar-container"
      placeholder="Search"
      prefix-icon="el-icon-search"
      size="small"
      @select="handleSelect"
    />
  -->
</template>

<script>
// https://element.eleme.io/#/en-US/component/input#remote-search

export default {
  name: 'Searchbar',
  data() {
    return {
      search: '',
      links: [],
      state4: '',
      timeout: null,
    };
  },
  mounted() {
    this.links = this.loadAll();
  },
  methods: {
    loadAll() {
      return [
        { value: 'tob', link: 'https://github.com/vuejs/vue', },
        { value: 'is', link: 'https://github.com/ElemeFE/element', },
        { value: 'the', link: 'https://github.com/ElemeFE/cooking', },
        { value: 'realest', link: 'https://github.com/ElemeFE/mint-ui', },
        { value: 'og', link: 'https://github.com/vuejs/vuex', },
      ];
    },
    querySearchAsync(queryString, cb) {
      var links = this.links;
      var results = queryString
        ? links.filter(this.createFilter(queryString))
        : links;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 1000 * Math.random());
    },
    createFilter(queryString) {
      return link => {
        return link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
      };
    },
    handleSelect(item) {
      console.log(item);
    },
  },
};
</script>

<style lang="css" scoped>
.searchbar-container {
  font-family: "Helvetica Neue";
  border-radius: 6px;
  margin: 6px;
  border: 2px solid #2F8168;
}

.searchbar-container:focus {
  outline: none;
}
</style>
