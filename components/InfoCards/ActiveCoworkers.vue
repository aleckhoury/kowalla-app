<template>
  <div v-if="this.$store.state.coworkers.list.length" class="activeCoworkers">
    <h3><b>Users coworking right now:</b></h3>
    <BTooltip
      v-for="(user, index) in this.$store.state.coworkers.list"
      :key="index"
      :label="user.username"
      position="is-top"
      animated
    >
      <nuxt-link :to="`/beta/user/${user.username}`">
        <span class="notify-badge" />
        <img
          :src="user.profilePicture"
          class="coworkerPic"
          onerror="this.src='https://gradientjoy.com/1000x250'"
        />
      </nuxt-link>
    </BTooltip>
  </div>
</template>

<script>
export default {
  name: "ActiveCoworkers",
};
</script>

<style lang="css" scoped>
h3 {
    position: sticky;
}
img.coworkerPic {
    width: 50px;
    height: auto;
    border-radius: 150px;
    margin: 0.5em;
}
.notify-badge {
    position: absolute;
    right: 1px;
    background: limegreen;
    border-radius: 50%;
    color: limegreen;
    width: 13px;
    height: 13px;
    border: 2px solid #E9EBEE;
    margin: 0.5em;
}
.activeCoworkers {
  width: 100%;
}
@media only screen and (max-width: 767px) {
    .activeCoworkers {
        display: inline-block;
        overflow: scroll;
        white-space: nowrap;
    }
    h3 {
      padding-left: 0.5em;
    }
}
@media only screen and (min-width: 767px) {
    .activeCoworkers {
        display: block;
        width: 100%;
    }
}
</style>
