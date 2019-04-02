<template>
  <div class="profile-card-container">
    <nuxt-link :to="getRoute">
      <img class="image" :src="profilePictureURL" />
    </nuxt-link>


    <nuxt-link :to="getRoute" class="name font-family">
      <b>{{name}}</b>
    </nuxt-link>

    <div class="username font-family">
      <nuxt-link :to="getRoute" class="username-link">
        <b>@{{username}}</b>
      </nuxt-link>
    </div>

    <div class="level is-marginless" :class="{'is-mobile': isMobile}"> <!-- need to convert to mobile columns -->
      <div v-for="item in stats" class="level-item stat-container is-paddingless">
        <div class="stat-title">
          <b>{{item.name}}</b>
        </div>

        <div class="stat-info">
          <b>{{item.stat}}</b>
        </div>
      </div>
    </div>

    <div class="subheader">
      <nuxt-link :to="subheaderURL" class="subheader-content">
        <b>{{subheaderString}}</b>
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
    profilePictureURL: {type: String, default: ''},
    subheaderString: {type: String, default: 'test'},
    subheaderURL: {type: String, default: '/about'},
    stats: Array,
    type: String,
    isMobile: {type: Boolean, default: false},
  },
  computed: {
    getStatInfoByIndex(i) {
      return this.stats[i].name;
    },
    getRoute() {
      return (this.type === "project") ? `/dev/p/${this.username}` : `/dev/u/${this.username}`;

    }
  },
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
  color: black;
  text-decoration: none;
}

.username {
  margin-top: -4px;
  font-size: 0.75em;
  color: #999
}

.username:hover {
  color: #39C9A0;
  cursor: pointer;
}

.stats-container {
  width: 100%;
}

.stat-container {
  display: flex;
  flex-direction: column;
  width: 48px;
  margin: 0px 5px 0px 5px;
}

.stat-title {
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

.username-link {
  font-family: "Helvetica Neue";
  font-size: 1em;
  color: #999;
  text-decoration: none;
  cursor: pointer;
}

.username-link:hover {
  text-decoration: underline;
  color: #39C9A0;
}
</style>
