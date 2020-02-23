<template>
  <div class="size">
    <div :class="{ 'hide-mobile-header-container': !showNavbar }" class="mobile-header-container is-touch">
      <div class="level half-height is-mobile mobile-header-top-container is-marginless">
        <nuxt-link to="/feed">
          <span class="level-left kowalla-logo">
            <img src="https://i.imgur.com/04hoRgV.png" class="kowalla-logo-picture" />
            kowalla
          </span>
        </nuxt-link>

        <div class="level-right">
          <div class="level-item align-icon" @click="callSearchModal">
            <font-awesome-icon class="theme-color-dark" icon="search" style="font-size: 20px" />
          </div>

          <div v-if="this.$store.state.user.loggedIn" class="level-item align-icon" @click="callNotifModal">
            <div v-if="viewedNotifications.length" slot="trigger" class="circle">{{ viewedNotifications.length }}</div>
            <font-awesome-icon v-else class="theme-color-dark" icon="bell" style="font-size: 20px" />
          </div>

          <div class="level-item">
            <img
              v-if="this.$store.state.user.loggedIn"
              :src="this.$store.state.user.profilePicture"
              class="nav-profile-picture level-item"
              @click="openSidebar()"
            />
            <strong v-else class="has-text-white" @click="cardModal">
              Login/Sign Up
            </strong>
          </div>
        </div>
      </div>
      <div class="level mobile-header-bottom-container is-mobile">
        <div v-if="headerType === 'Post'" class="is-hidden-desktop sortIcons">
          <font-awesome-icon icon="angle-left" @click="$router.go(-1)" />
        </div>
        <div v-else class="level-item">
          <Tabs v-if="!isEmpty" :type="headerType" />
          <SortingOptions :is-mobile="true" />
        </div>
      </div>
    </div>
    <div v-if="this.$store.state.firstVisit.firstVisit" :class="{ 'hide-mobile-header-container': !showNavbar }" class="hero">
      <div class="bannerStripe"></div>
      <div class="hero-body">
        <h1 class="title is-5">
          Welcome!
          <span class="delete is-medium is-pulled-right" @click="$store.commit('firstVisit/cancelFirstVisit')" />
        </h1>
        <h2 class="subtitle is-6">
          Kowalla is the coworking space that lives in your pocket, so you're never more than a tap away from the community and support you need to build your
          dreams. That means:
          <ul>
            <li>
              Reddit-like spaces
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
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="13.4rem" fill="#bd56e1">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -12" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
        <g>
          <rect width="100%" height="30px" />
          <circle id="one" cx="90%" cy="0" r="50" />
        </g>
      </svg>
    </div>
  </div>
</template>
<script>
import NotificationModal from '~/components/Modals/Other/NotificationModal';
import SearchModal from '~/components/Modals/Other/SearchModal';
import LoginHandler from '~/components/Onboarding/LoginHandler';
import Tabs from '../NavSubHeader/Tabs';
import SortingOptions from '../NavSubHeader/SortingOptions';

export default {
  name: 'MobileHeader',
  components: {
    SortingOptions,
    Tabs,
  },
  props: {
    openSidebar: { type: Function, default: () => {} },
    locationToDisplay: { type: String, default: '' },
    locationPictureToDisplay: { type: String, default: '' },
    isHome: { type: Boolean, default: false },
  },
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
      scrollValue: 0,
      toggleSidebar: false,
      notifications: [],
    };
  },
  computed: {
    isEmpty() {
      return this.headerType === 'Post' || this.headerType === 'sortOnly';
    },
    headerType() {
      if (this.$route.path.includes('/edit/')) return 'SettingsActiveTab';
      else if (this.$route.path.includes('/posts/')) return 'Post';
      else if (this.$route.path === '/feed') return 'NewsFeedActiveTab';
      return 'sortOnly';
    },
    viewedNotifications() {
      return this.notifications.filter(x => x.viewed === false);
    },
  },
  watch: {
    async $route(to, from) {
      await this.getNotifications();
    },
  },
  async mounted() {
    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener('scroll', this.onScroll);
    await this.getNotifications();
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    callSearchModal() {
      this.$buefy.modal.open({
        parent: this,
        component: SearchModal,
        props: { modalText: 'Search' },
        width: 300,
        hasModalCard: true,
      });
    },
    cardModal() {
      this.$buefy.modal.open({
        parent: this,
        component: LoginHandler,
        width: 900,
        hasModalCard: true,
      });
    },
    callNotifModal() {
      this.viewNotifications();
      this.$buefy.modal.open({
        parent: this,
        component: NotificationModal,
        props: { notifications: this.notifications },
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
    async getNotifications() {
      let { result } = await this.$axios.$post(`/api/v1/profiles/${this.$store.state.user._id}/notifications`);
      this.notifications = result;
    },
    viewNotifications() {
      if (this.notifications.length) {
        this.notifications.forEach(x => (x.viewed = true));
        let viewedNotifs = [];
        for (let i in this.notifications) {
          if (this.notifications[i]._id) {
            viewedNotifs = viewedNotifs.concat(this.notifications[i]._id);
          }
        }
        this.$axios.$put(`/api/v1/profiles/${this.$store.state.user._id}/notifications`, { data: { notifIds: viewedNotifs } });
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

.half-height {
  height: 50px;
}


img.kowalla-logo-picture {
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
  z-index: 12;
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
.circle {
  background-color: #ac28da;
  color: white;
  align-items: center;
  border-radius: 20px;
  display: flex;
  font-size: 12px;
  height: 22px;
  justify-content: center;
  text-transform: uppercase;
  width: 22px;
}
</style>
