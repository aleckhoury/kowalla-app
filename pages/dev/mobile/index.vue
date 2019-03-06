<template>
  <div class="screen">
    <div class="mobile-header-container is-touch">
      <!-- Mobile Header Top -->
      <div class="level is-mobile is-marginless">
        <div class="level-left">

          <div class="level-item">
            text
          </div>
        </div>

        <div class="level-right">
          <div class="level-item">
            <nuxt-link :to="`/dev/u/${this.$store.state.user.username}`">
              <img
                :src="this.$store.state.user.profilePicture"
                class="mobile-nav-profile-picture"
              >
            </nuxt-link>
          </div>
        </div>
      </div>


      <!-- Mobile Header Bottom -->
      <div class="level is-mobile is-marginless">
        <div class="level-left">
          left bottom
        </div>

        <div class="level-right">
          right bottom
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MobileTest",
  data() {
    return {
      pageType: null,
    }
  },
  mounted() {
    try {
      let re1 = new RegExp('/[u,p,c]/');
      let regex1Grab = this.$route.fullPath.match(re)[0];

      if (this.regexGrab === '/p/') {
        this.pageType = 'project';
      }
      else if (this.regexGrab === '/u/') {
        this.pageType = 'user';
      }
      else if (this.regexGrab === '/c/') {
        this.pageType = 'community';
      }
    } catch {
      this.pageType = "home";
    }
  }
}
</script>
<style lang="css" scoped>
.mobile-header-container {
  height: 100px;
  background: white;
}

.mobile-nav-profile-picture{
  height: 40px;
  width: 40px;
  border: 1px solid #2F8168;
  border-radius: 6px;
  margin-left: 6px
}

.full-width {
 width: 100%;
}
</style>
