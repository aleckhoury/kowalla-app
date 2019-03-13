<template>
  <div class="size">
    <div class="mobile-header-container is-touch">
      <!-- Mobile Header Top -->
      <div class="level half-height is-mobile mobile-header-top-container">
        <div class="level-left" @click="callChangeLocationModal">
          <div class="level-item">
            <img
              v-if="!isHome"
              :src="locationPictureToDisplay"
              class="mobile-nav-link-picture"
            />

            <div v-else class="center mobile-nav-link-picture">
              <font-awesome-icon icon="home" />
            </div>
          </div>

          <div class="level-item margin-adjust">
            <b>{{locationToDisplay}}</b>
          </div>

          <div class="level-item margin-adjust">
            <font-awesome-icon icon="angle-down" />
          </div>

        </div> <!-- end level-left -->

        <div class="level-right">
          <div class="level-item">
            <nuxt-link :to="`/dev/u/${this.$store.state.user.username}`">
              <img
                :src="this.$store.state.user.profilePicture"
                class="mobile-nav-profile-picture"
              />
            </nuxt-link>
          </div>
        </div> <!-- end level-right -->
      </div> <!-- top moible header -->

      <MobileNavIcons class="half-height"></MobileNavIcons>
      <!-- Mobile Header Bottom
      <b-tabs class="on-bottom half-height is-marginless"  expanded>
        <b-tab-item class="block" label="Posts" icon="view-quilt"></b-tab-item>
        <b-tab-item class="block" label="" icon="magnify"></b-tab-item>
        <b-tab-item class="block" label="" icon="bell-outline"></b-tab-item>
        <b-tab-item class="block" label="" icon="dots-horizontal"></b-tab-item>
      </b-tabs> -->
    </div>
  </div>
</template>
<script>
import ChangeLocationModal from '~/components/Modals/Other/ChangeLocationModal';
import MobileNavIcons from '~/components/MobileNavIcons';

export default {
  name: "MobileHeader",
  components: { ChangeLocationModal, MobileNavIcons },
  data() {
    return {
    };
  },
  props: {
    locationToDisplay: String,
    locationPictureToDisplay: {type: String, default: ''},
    isHome: {type: Boolean, default: false},
  },
  methods: {
    callChangeLocationModal() {

      // will open mulitple modals
      this.$modal.open({
        parent: this,
        component: ChangeLocationModal,
        /*props: {
          name: this.communityName,
          headerPicture: this.bannerPictureURL,
          profilePicture: this.profilePictureURL,
          description: this.communityDescription,
          communityId: this.communityId,
        },*/
        width: 300,
        hasModalCard: true
      });
    }
  }
}
</script>
<style lang="css" scoped>
.size {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  height: 50px;
  width: 100%;
}

.mobile-header-container {
  height: 100px;
  background: white;
}

.mobile-header-top-container {
  margin: 0px 10px 0px 10px;
}

.on-bottom {
  position: relative;
  bottom: 0;
  right: 0;
}

.level-left {
  border: 1px solid black;
  border-radius: 6px;
  padding: 5px;
  height: 40px;
}

.margin-adjust {
  margin: 0px 0px 0px -4px;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.half-height {
  height: 50px;
}

.mobile-nav-profile-picture {
  height: 40px;
  width: 40px;
  border: 1px solid #E0DDDD;
  border-radius: 6px;
}

.mobile-nav-link-picture {
  height: 30px;
  width: 30px;
  border: 1px solid #E0DDDD;
  border-radius: 6px;
}
</style>
