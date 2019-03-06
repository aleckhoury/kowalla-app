<template>
  <div class="size">
    <div class="mobile-header-container is-touch">
      <!-- Mobile Header Top -->
      <div class="level half-height is-mobile is-marginless">
        <div class="level-left test-outline" @click="callChangeLocationModal">
          <div class="level-item">
            <img
              src="locationPictureToDisplay"
              class="mobile-nav-link-picture"
            />
          </div>

          <div class="level-item">
            {{locationToDisplay}}
          </div>


          <div class="level-item">
            <font-awesome-icon icon="angle-down" />
          </div>

        </div> <!-- end level-left -->

        <div class="level-right test-outline">
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

      <!-- Mobile Header Bottom -->
      <b-tabs class="on-bottom half-height is-marginless"  expanded>
        <b-tab-item class="block" label="Create" icon="plus-circle-outline"></b-tab-item>
        <b-tab-item class="block" label="" icon="magnify"></b-tab-item>
        <b-tab-item class="block" label="" icon="bell-outline"></b-tab-item>
        <b-tab-item class="block" label="" icon="settings-outline"></b-tab-item>
      </b-tabs>
      <!--
      <div class="level is-mobile is-marginless">




          <div class="level-left">
            left bottom
          </div>

          <div class="level-right">
            right bottom
          </div>

      </div>-->
    </div>
  </div>
</template>
<script>
import ChangeLocationModal from '~/components/Modals/Other/ChangeLocationModal';

export default {
  name: "MobileHeader",
  components: { ChangeLocationModal },
  data() {
    return {
      locationModalOpen: false,
    }
  },
  props: {
    locationToDisplay: String,
    locationPictureToDisplay: String,
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
        //width: 100%,
        hasModalCard: true
      });

      this.locationModalOpen = true;
    }
  }


}
</script>
<style lang="css" scoped>
.size {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  height: 90px;
  width: 100%;
}

.mobile-header-container {
  height: 100px;
  background: white;
}

.on-bottom {
  position: relative;
  bottom: 0;
  right: 0;
}

.half-height {
  height: 50px;
}

.mobile-nav-profile-picture{
  height: 40px;
  width: 40px;
  border: 1px solid #2F8168;
  border-radius: 6px;
}

.mobile-nav-link-picture {
  height: 30px;
  width: 30px;
  border: 1px solid #2F8168;
  border-radius: 6px;
}
</style>
