<template>
  <div class="size">
    <div
      class="mobile-header-container is-touch"
      :class="{ 'hide-mobile-header-container': !showNavbar}"
    >
      <!-- Mobile Header Top -->
      <div class="level half-height is-mobile mobile-header-top-container is-marginless">
        <nuxt-link to="/dev/">
          <div class="level-left kowalla-logo">
            <img
              src="https://i.imgur.com/04hoRgV.png"
              class="kowalla-logo-picture"
            />
            kowalla

          </div>
        </nuxt-link>

        <div class="level-right">
          <div
            class="level-item align-icon"
            @click="callSearchModal"
          >
            <font-awesome-icon
              class="theme-color-dark"
              icon="search"
              style="font-size: 20px"
            />
          </div>

          <div
            v-if="this.$store.state.user.loggedIn"
            class="level-item align-icon"
            @click="callNotifModal"
          >
            <font-awesome-icon
              class="theme-color-dark"
              icon="bell"
              style="font-size: 20px"
            />
          </div>

          <div class="level-item">
            <nuxt-link v-if="this.$store.state.user.loggedIn" :to="`/dev/u/${this.$store.state.user.username}`">
              <img
                :src="this.$store.state.user.profilePicture"
                class="mobile-nav-profile-picture"
              />
            </nuxt-link>
            <b v-if="!this.$store.state.user.loggedIn" class="has-text-white" @click="cardModal">Login/Sign Up</b>
          </div>
        </div> <!-- end level-right -->
      </div> <!-- top mobile header -->

      <!-- Mobile Header Bottom -->
      <div class="level mobile-header-bottom-container half-height is-mobile">
        <!-- Level left -->
        <div class="level-left selector" @click="callChangeLocationModal">
          <!-- Selector -->
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
        </div> <!-- End selector -->

        <div class="level-right">
          <SortingOptions isMobile/></SortingOptions>
        </div> <!-- End level right -->
      </div> <!-- End level -->
    </div> <!-- End mobile header bottom -->
  </div>
</template>
<script>
import ChangeLocationModal from '~/components/Modals/Other/ChangeLocationModal';
import NotificationModal from '~/components/Modals/Other/NotificationModal';
import SortingOptions from '~/components/Header/NavSubHeader/SortingOptions';
import NavNotifications from '~/components/Header/NavHeader/NavNotifications';
import SearchModal from '~/components/Modals/Other/SearchModal';
import LoginAndRegisterModal from '~/components/Auth/LoginAndRegisterModal'

export default {
  name: "MobileHeader",
  components: { ChangeLocationModal, SortingOptions, NavNotifications },
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
      scrollValue: 0,
    };
  },
  props: {
    locationToDisplay: String,
    locationPictureToDisplay: {type: String, default: ''},
    isHome: {type: Boolean, default: false},
  },
  methods: {
    callChangeLocationModal() {
      this.$modal.open({
        parent: this,
        component: ChangeLocationModal,
        width: 300,
        hasModalCard: true
      });
    },
    callSearchModal() {
      this.$modal.open({
        parent: this,
        component: SearchModal,
        props: { modalText: "Search" },
        width: 300,
        hasModalCard: true
      });
    },
    cardModal() {
      this.$modal.open({
                parent: this,
                component: LoginAndRegisterModal,
                width: 900,
                hasModalCard: true,
              },
      )
    },
    callNotifModal() {
      this.$modal.open({
        parent: this,
        component: NotificationModal,
        props: { modalText: "Notif" },
        width: 300,
        hasModalCard: true
      });
    },
    onScroll() {
      // if we're scrolling up
      if (window.pageYOffset < 0) {
        return;
      }

      // if we're scrolling but haven't crossed our offset point, 50px
      else if (Math.abs(window.pageYOffset - this.lastScrollPosition) < 50) {
        return;
      }

      // if we've passed our offset point, update the last position
      else {
        this.showNavbar = window.pageYOffset < this.lastScrollPosition;
        this.lastScrollPosition = window.pageYOffset;
      }
    }
  },
  mounted() {
    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener('scroll', this.onScroll);
  },

  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
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

.theme-color-dark {
  color: #2F8168;
}

.mobile-header-container {
  height: 100px;
  transform: translate3d(0, 0, 0);
  transition: 0.3s all ease-out;
}

.hide-mobile-header-container {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}

.mobile-header-top-container {
  padding: 0px 10px 0px 10px;
  background-color: #39C9A0;
}

.mobile-header-bottom-container {
  background-color: white;
  border: 1px solid #2F8168;
  padding: 0px 10px 0px 10px;
}

.on-bottom {
  position: relative;
  bottom: 0;
  right: 0;
}

.selector {
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

.kowalla-logo-picture {
  height: 25px;
  width: 25px;
  margin-right: 5px;
}

.kowalla-logo {
  font-family: 'Nunito';
  font-size: 1.75em;
  color: #fff;
  text-decoration: none;
}
.page-link {
  font-family: "Helvetica Neue";
  font-size: 1em;
  display: flex;
  color: #2F8168;
  align-items: center;
  padding: 6px;
  text-decoration: none;
  cursor: pointer;
}
</style>
