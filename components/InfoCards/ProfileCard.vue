<template>
  <div class="profile-card-container">

    <img class="image" :src="this.$store.state.user.profilePicture" />

    <div class="name font-family">
      <b>{{name}}</b>
    </div>

    <div class="username font-family">
      <b>{{username}}</b>
    </div>



    <div class="level is-marginless">
      <div
        class="level-item stat-container is-paddingless"
        v-for="item in stats"
        >

        <div class="stat-title">
          <b>{{item.name}}</b>
        </div>




        <div class="stat-info">
          <b>{{item.stat}}</b>
        </div>





      </div>
      <!--
      <div
        class="column test-outline is-paddingless is-one-third"
        v-for="item in stats"
        >
        <div class="level stats-container is-marginless">
          <b>{{item.name}}</b>
        </div>
        <div class="level stats-container is-margliness">
          {{item.stat}}
        </div>
      </div>
      -->

    </div>

    <div class="subheader">
      <nuxt-link to="subheaderURL" class="subheader-content">
        <b>Subheader content</b>
      </nuxt-link>

    </div>
  </div>

</template>
<script>
import Card from '~/components/Card';

export default {
  name: "ProfileCard",
  props: {
    name: String,
    username: String,
    subheaderString: String,
    subheaderURL: String,
    stats: Array,
  },
  computed: {
    getStatInfoByIndex(i) {
      return this.stats[i].name;
    }
  }


}
</script>
<style lang="css" scoped>
.profile-card-container {
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  background-color: white;
  border: 1px solid #E0DDDD;
  border-radius: 6px;
  height: 225px;
  width: 215px;
}

.image {
  border-radius: 6px;
  margin-top: 16px;
  margin-bottom: 8px;
  height: 86px;
  width: 86px;
  border: 1px solid #E0DDDD;
}

.font-family {
  font-family: "Helvetica Neue";
  text-decoration: none;
}

.name {
  font-size: 1em;
}

.username {
  margin-top: -2px;
  font-size: 0.75em;
  color: #999
}

.negative-margin {
  margin-top: -2px;
}

.username:hover {
  color: #39C9A0;
  cursor: pointer;
}

.test-outline {
  border: 1px solid black;
}

.stats-container {
  width: 100%;
}

.stat-container {
  display: flex;
  flex-direction: column;
  width: 48px;
  margin: 5px;
}

.stat-title {
  margin-top: -2px;
  font-size: 0.75em;
  color: black;
}

.stat-info {
  margin-top: -2px;
  font-size: 1em;
  color: #39C9A0;
}

.subheader {
  border-top: 1px solid #E0DDDD;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 8px;
  width: 100%;
  text-align: center;
  vertical-align: middle;
}

.subheader-content {
  font-family: "Helvetica Neue";
  font-size: 0.75em;
  color: #39C9A0;
}

.subheader-content:hover {
  text-decoration: underline;
}
</style>
