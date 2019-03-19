<template lang="html">
  <b-autocomplete
    class="searchbar-container"
    placeholder="Search"
    icon="magnify"
    @typing="fetchData"
    :data="filteredDataArray"
    @select="(option) => optionSelected(option)">
    <template slot="empty">No results found</template>
  </b-autocomplete>
</template>

<script>
import { debounce } from 'debounce';

export default {
  name: 'Searchbar',

    data() {
      return {
        data: [ 'Tob', 'is', 'the', 'realest', 'OG' ], // need to simulate with some fake objects
        selected: null,
        name: '',
        isFetchingData: false,
      }
    },
    computed: {
      filteredDataArray() {
        return this.data.filter((option) => { // data can be objects
          return option
            .toString()
            .toLowerCase()
            .indexOf(this.name.toLowerCase()) >= 0;
        });
      }
    },
    methods: {
      optionSelected(option) {
        console.log(option);
        this.selcted = option;
      },
      fetchData: debounce(function (input) { // need to add debounce
        this.isFetchingData = true; // for loading animation eventually

        // make axios call to search engine

        this.isFetchingData = false;
      }, 500)
    }
}
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
