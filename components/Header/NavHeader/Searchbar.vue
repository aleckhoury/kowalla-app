<template lang="html">
  <b-autocomplete
    class="searchbar-container"
    placeholder="Search"
    icon="magnify"
    v-model="name"
    field="name"
    :data="filteredDataArray"
    @input="fetchData"
    @select="optionSelected">
    <!--<template slot="empty">No results found</template>-->
    <template slot-scope="props">
      <div class="search-item-container">
          <div class="media-left">
              <img width="40" :src="props.option.picture">
          </div>
          <div>
              <span class="search-item-text">{{ props.option.name }}</span>

              <br/>
              <small v-if="props.option.hasOwnProperty('profileId')">
                  Profile
              </small>

              <small v-if="props.option.hasOwnProperty('projectId')">
                  Project
              </small>

              <small v-if="props.option.hasOwnProperty('communityId')">
                  Community
              </small>
          </div>
      </div>
    </template>
  </b-autocomplete>
</template>

<script>
import { debounce } from 'debounce';

export default {
  name: 'Searchbar',
  data() {
      return {
        data: [],
        searchResults: [],
        selected: '',
        name: '',
        isFetchingData: false,
      }
    },
    computed: {
      filteredDataArray() {
        return this.searchResults.filter((option) => { // data can be objects
          return option.name
            .toString()
            .toLowerCase()
            .indexOf(this.name.toLowerCase()) >= 0;
        });
      }
    },
    methods: {
      optionSelected: async function(option) {

        // emit event for search modal to close
        this.$emit('option-selected');

        if (option !== null) { // for some reason this sometimes gets pushed through as "null"
          if (option.hasOwnProperty("profileId")) {
            console.log('is profile')
            let responseData = await this.$axios.get(`/api/v1/profiles/${option.profileId}`);

            this.$router.push({
              path: `/dev/u/${responseData.data.username}`
            });
          }

          if (option.hasOwnProperty("projectId")) {
            let responseData = await this.$axios.get(`/api/v1/projects/${option.projectId}`);

            this.$router.push({
              path: `/dev/p/${responseData.data.name}`
            });
          }

          if (option.hasOwnProperty("communityId")) {
            let responseData = await this.$axios.get(`/api/v1/communities/${option.communityId}`);

            this.$router.push({
              path: `/dev/c/${responseData.data.name}`
            });
          }
        }
      },

      fetchData: debounce(async function (name) {

        this.isFetchingData = true; // for loading animation eventually

        this.searchResults = await this.$axios.$get('/api/v1/search/');

        this.isFetchingData = false;
      }, 500),
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

.search-item-container {
  width: 100%;
  display: flex;
  flex-direction: row;
}

.search-item-text {
  height: 50%;
  font-size: 1em;
}
</style>
