<template>
  <div class="size">
    <div
      :class="{ 'hide-mobile-header-container': !showNavbar }"
      class="mobile-header-container is-touch"
    >
      <!-- Mobile Header Top -->
      <div
        class="level half-height is-mobile mobile-header-top-container is-marginless"
      >
        <nuxt-link to="/dev">
          <div class="level-left kowalla-logo">
            <img
              src="https://i.imgur.com/04hoRgV.png"
              class="kowalla-logo-picture"
            />
            kowalla
          </div>
        </nuxt-link>

        <div class="level-right">
          <div class="level-item align-icon" @click="callSearchModal">
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

          <!--<div class="level-item">-->
          <img
            v-if="this.$store.state.user.loggedIn"
            :src="this.$store.state.user.profilePicture"
            class="nav-profile-picture level-item"
            onerror="this.src='https://gradientjoy.com/50'"
            @click="openSidebar()"
          />
          <b v-else class="has-text-white" @click="cardModal">
            Login/Sign Up
          </b>
          <!--</div>-->
        </div>
        <!-- end level-right -->
      </div>
      <!-- top mobile header -->

      <!-- Mobile Header Bottom -->
      <div class="level mobile-header-bottom-container is-mobile">
        <!-- Level item -->
        <div v-if="!isEmpty" class="level-item">
          <Tabs :type="headerType" />
        </div>
        <div v-else>
          <div
            v-if="headerType === 'Post'"
            class="is-hidden-desktop sortIcons"
          >
            <font-awesome-icon
              icon="arrow-left"
              @click="$router.go(-1)"
            />
          </div>
          <SortingOptions v-else :is-mobile="true" />
        </div>
      </div>
      <!-- End level -->
    </div>
    <div
      v-if="this.$store.state.firstVisit.firstVisit"
      :class="{ 'hide-mobile-header-container': !showNavbar }"
      class="hero"
    >
      <div class="bannerStripe"></div>
      <div class="hero-body">
        <h1 class="title is-5">
          Welcome!
          <div
            class="delete is-medium is-pulled-right"
            @click="$store.commit('firstVisit/cancelFirstVisit')"
          />
        </h1>
        <h2 class="subtitle is-6">
          Kowalla is the coworking space that lives in your pocket, so you're
          never more than a tap away from the community and support you need to
          build your dreams. That means:
          <ul>
            <li>
              Reddit-like communities
            </li>
            <li>
              Live Posts to easily cowork with others
            </li>
            <li>
              Integrations to showcase your work without you lifting a finger
            </li>
          </ul>
        </h2>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="100%"
        height="13.4rem"
        fill="#bd56e1"
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -12"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
        <g>
          <rect width="100%" height="30px" />
          <circle id="one" cx="90%" cy="0" r="50" />
        </g>
      </svg>
    </div>
    <!-- End mobile header bottom -->
  </div>
</template>
<script>
import ChangeLocationModal from "~/components/Modals/Other/ChangeLocationModal";
import NotificationModal from "~/components/Modals/Other/NotificationModal";
import NavNotifications from "~/components/Header/NavHeader/NavNotifications";
import SearchModal from "~/components/Modals/Other/SearchModal";
import LoginHandler from "~/components/Auth/LoginHandler";
import SideMenu from "./SideMenu";
import Tabs from "../NavSubHeader/Tabs";
import SortingOptions from "../NavSubHeader/SortingOptions";

export default {
  name: "MobileHeader",
  components: {
    SortingOptions,
    Tabs,
    SideMenu,
    ChangeLocationModal,
    NavNotifications,
  },
  props: {
    openSidebar: { type: Function, default: () => {} },
    locationToDisplay: { type: String, default: "" },
    locationPictureToDisplay: { type: String, default: "" },
    isHome: { type: Boolean, default: false },
  },
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
      scrollValue: 0,
      toggleSidebar: false,
    };
  },
  computed: {
    isEmpty() {
      if (this.headerType === 'Post' || this.headerType === 'sortOnly') {
        return true;
      }
    },
    headerType() {
      if (this.$route.path.includes('edit')) return "SettingsActiveTab";
      else if (this.$route.path.includes('posts')) return "Post";
      else if (this.$route.path === '/dev') return "NewsFeedActiveTab";
      return 'sortOnly';
    },
  },
  mounted() {
    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener("scroll", this.onScroll);
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    callChangeLocationModal() {
      this.$modal.open({
        parent: this,
        component: ChangeLocationModal,
        width: 300,
        hasModalCard: true,
      });
    },
    callSearchModal() {
      this.$modal.open({
        parent: this,
        component: SearchModal,
        props: { modalText: "Search" },
        width: 300,
        hasModalCard: true,
      });
    },
    cardModal() {
      this.$modal.open({
        parent: this,
        component: LoginHandler,
        width: 900,
        hasModalCard: true,
      });
    },
    callNotifModal() {
      this.$modal.open({
        parent: this,
        component: NotificationModal,
        props: { modalText: "Notif" },
        width: 1000,
        hasModalCard: true,
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
    },
  },
};
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
  transform: translate3d(0, 0, 0);
  transition: 0.3s all ease-out;
}

.hide-mobile-header-container {
  box-shadow: none;
  transform: translate3d(0, -200%, 0);
}

.mobile-header-top-container {
  padding: 0px 10px 0px 10px;
  background-color: #39C9A0;
}

.mobile-header-bottom-container {
  background-color: white;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  padding: 0px 10px 0px 10px;
  height: 42px;
}

.on-bottom {
  position: relative;
  bottom: 0;
  right: 0;
}

.selector {
  border: 2px solid #39C9A0;
  color: #39C9A0;
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
  border-radius: 6px;
}

.kowalla-logo-picture {
  height: 35px;
  width: 35px;
  margin-right: 5px;
}

.kowalla-logo {
  font-family: 'Nunito';
  font-size: 1.75em;
  color: #fff;
  text-decoration: none;
  font-weight: 900;
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
.hero {
  overflow:scroll;
  height: 13.4rem;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  z-index: 2;
  transition: 0.3s all ease-out;
}
.hero-body {
  z-index: 3;
  padding: 5px;
}
.bannerStripe {
  height: 30px;
  width: 100%;
  background-color: #bd56e1;
  z-index: 1;
  position: absolute;
}
.title {
  color: white;
}
.subtitle {
  font-size: 1.2em;
  line-height: 1.4;
  color: white;
}
.delete {
  margin-top: -2px;
}
ul {
  margin-left:20px;
  list-style: inside;
}
ul li {
  list-style-type: disc;
}
.hero svg {
  position: fixed;
  z-index: -1;
  background-color: #cd7be8;
}
.sortIcons svg {
  color: #999;
  font-size: 1.8em;
  margin-right: 85vw;
  z-index: 12;
  position: unset;
  background: transparent !important;
}
circle {
  animation-duration: 15s;
  animation-timing-function:ease-in-out;
  animation-iteration-count:infinite;
}
#one{animation-name: one;}
@keyframes one{
  0%{transform:translate(0,0)}
  50%{transform:translate(0,180px)}
  0%{transform:translate(0,0)}
}
.nav-profile-picture {
  height: 42px;
  width: 42px;
  border-radius: 6px;
}
.b-tabs:not(:last-child) {
  margin-bottom: 0 !important;
  position: absolute;
}
</style>
