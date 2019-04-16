<template lang="html">
  <div class="screen background-tint">
    <Header class="is-hidden-touch"></Header>

    <div class="container is-fullhd is-hidden-touch">
      <div class="columns is-marginless main-margin">

        <!-- nav pane -->
        <div class="column is-one-quarter is-paddingless side-pane">
          <NavPane></NavPane>
        </div>

        <!-- post feed -->
        <div class="column is-one-half is-paddingless" id="postFeed">
          <Post
            v-for="post in postList"
            :key="post._id"
            :post="post"
            @delete-post="removePostFromPostList"
          />
        </div>

        <!-- info pane -->
        <div class="column is-one-quarter is-paddingless side-pane">
          <InfoPane>
            <ProfileCard
              :name="`${this.firstName} ${this.lastName}`"
              :profilePictureURL="profilePictureURL"
              :username="this.username"
              :stats="profileStats"
              type="user"></ProfileCard>

            <DescriptionCard
              :headerString="`About ${this.firstName}`"
              :subheaderOn="false">

              {{profileDescription}}

            </DescriptionCard>

            <EditButton
              v-if="(this.$store.state.user.username === this.username)"
              @edit-button-clicked="callEditProfileModal"
            >
              <b>Edit Settings</b>
            </EditButton>

            <Card
              v-if="((profileSubs.owned.length > 0) && (this.$store.state.user.username !== this.username))"
              :headerString="`Made by ${this.firstName}`"
              headerOn
              :subheaderOn="false"
            >
              <!-- need to make NavCard more flexible -->
              <NavCard type="profile" selector="owned" :profileSubs="profileSubs"></NavCard>
            </Card>

            <Card
              v-if="((profileSubs.subscriptions.length > 0) && (this.$store.state.user.username !== this.username))"
              :headerString="`${this.firstName}'s Subscriptions`"
              subheaderString="More communities you'll love"
            >
              <!-- need to make NavCard more flexible -->
              <NavCard type="profile" selector="subscriptions" :profileSubs="profileSubs"></NavCard>
            </Card>

          </InfoPane>
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <MobileHeader
      class="is-hidden-desktop"
      :locationPictureToDisplay="this.profilePictureURL"
      :locationToDisplay="`@${this.username}`"
    />

    <div class="columns is-marginless is-hidden-desktop mobile-main-margin">
      <div class="side-pane">
        <ProfileCard
          :name="`${this.firstName} ${this.lastName}`"
          :profilePictureURL="profilePictureURL"
          :username="this.username"
          :stats="profileStats"
          isMobile
          type="user"/>
      </div>

      <DescriptionCard
        class="newsfeed-margin"
        :headerString="`About ${this.firstName}`"
        :subheaderOn="false">

        {{profileDescription}}

      </DescriptionCard>

      <div class="side-pane">
        <EditButton
          v-if="(this.$store.state.user.username === this.username)"
          @edit-button-clicked="callEditProfileModal"
        >
          <b>Edit Settings</b>
        </EditButton>
      </div>

      <Post
        class="newsfeed-margin"
        :isMobile="true"
        v-for="post in postList"
        :key="post._id"
        :post="post"
        @delete-post="removePostFromPostList"
      />
    </div>


    <MobileFooter class="is-hidden-desktop"/>
  </div>
</template>

<script>
import MobileHeader from '~/components/Header/MobileHeader';
import MobileFooter from '~/components/Header/MobileFooter';

import NavPane from '~/components/NavCards/NavPane';
import Header from '~/components/Header/Header';
import ProfileCard from '~/components/InfoCards/ProfileCard';
import DescriptionCard from '~/components/InfoCards/DescriptionCard';
import InfoPane from '~/components/InfoCards/InfoPane';
import Card from '~/components/Card';
import NavCard from '~/components/NavCards/NavCard';
import EditButton from '~/components/InfoCards/EditButton';
import EditProfileModal from '~/components/Modals/Edit/EditProfileModal';
import Post from "~/components/PostCard/feedPost";

export default {
  middleware: 'activePost',
  name: 'UserPageTest',
  components: {
    NavPane,
    NavCard,
    Card,
    Header,
    ProfileCard,
    InfoPane,
    DescriptionCard,
    EditButton,
    EditProfileModal,
    Post,
    MobileHeader,
    MobileFooter,
  },
  data() {
    return {
      username: null,
      profileId: '',
      firstName: '',
      lastName: '',
      profilePictureURL: '',
      profileDescription: '',

      profileStats: [],

      profileSubs: { subscriptions: [], owned: [] },

      // newsfeed content
      postList: [],
    };
  },
  computed: {
    getUsername() {
      return this.username;
    },
    sort() {
      return this.$store.state.sorting.profile;
    }
  },
  watch: {
    async sort() {
      this.postList = await this.$axios.$get(`/api/v1/profile/posts/${ this.profileId }/${ this.sort }/0`);

      await this.scroll();
    }
  },
  methods: {
    callEditProfileModal() {
      this.$modal.open({
        parent: this,
        component: EditProfileModal,
        props: {
          firstName: this.firstName,
          lastName: this.lastName,
          username: this.username,
          profilePicture: this.profilePictureURL,
          description: this.profileDescription,
          profileId: this.profileId,
        },
        width: 900,
        hasModalCard: true
      });
    },
    async scroll() {
      if (this.postList.length) {
        let isActive = false;
        window.onscroll = async ev => {
          const feed = document.getElementById('postFeed');
          const bottomOfWindow = (window.innerHeight + window.scrollY >= feed.offsetHeight - 500);
          if (!isActive && bottomOfWindow) {
            isActive = true;
            const posts = await this.$axios.$get(`/api/v1/profile/posts/${ this.profileId }/${ this.sort }/${ this.postList.length }`);
            const newList = await this.postList.concat(posts);
            if (posts.length) {
              this.postList = await newList;
              isActive = false;
            }
          }
        }
      }
    },
    async removePostFromPostList(postId) {
      for (let i in this.postList) {
        if (this.postList[i]._id === postId) {
          this.postList.splice(i, 1);
          await this.$axios.delete(`/api/v1/communities/${this.communityId}/posts/${postId}`);
          break;
        }
      }
    },
  },
  created() {
    this.username = this.$route.params.username;
  },
  async mounted() {
    let infoRes = await this.$axios.$get(`/api/v1/profiles/u/${this.username}`);
    //------------------
    // remove if statements, but keep assignments in production.
    // they're only for quicker validation to ignore an unhelpful nuxt error throw
    //------------------
    // get name
    if (infoRes.hasOwnProperty('firstName')) {
      this.firstName = infoRes.firstName;
      this.lastName = infoRes.lastName;
      this.profileDescription = infoRes.description;
      this.profilePictureURL = infoRes.profilePicture;
      this.profileId = infoRes._id;
      this.profileStats.push({ name: 'Rep', stat: infoRes.reputation });
      this.profileStats.push({ name: 'Posts', stat: infoRes.postCount });
      this.profileStats.push({ name: 'Replies', stat: infoRes.commentCount });

      let subRes = await this.$axios.$get(`/api/v1/profiles/${this.profileId}/subs`);
      this.profileSubs = subRes.profileSubscriptions;

      this.postList = await this.$axios.$get(`/api/v1/profile/posts/${ this.profileId }/${ this.sort }/${ this.postList.length }`);

      await this.scroll();

      document.title = `Kowalla - ${this.firstName} ${this.lastName}`;
    }
  },
}
</script>

<style lang="css">
.no-padding {
  padding: 0px;
}

.screen {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
