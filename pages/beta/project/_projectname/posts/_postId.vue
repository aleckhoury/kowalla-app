<template lang="html">
  <div class="screen background-tint">
    <div class="container is-fullhd is-hidden-touch">
      <!--
          we'll want to dial in the container fullhd breakpoint
          right now it isn't contained to just ultra-wides, and effects
          normal laptop resolution
      -->

      <!-- two columns, navpane and banner -->
      <div :class="{ firstVisit: this.$store.state.firstVisit.firstVisit }" class="columns is-marginless  main-margin">
        <!-- nav pane -->
        <div :class="{ firstVisit: this.$store.state.firstVisit.firstVisit }" class="column is-one-quarter">
          <Creations />
          <Subscriptions />
        </div>

        <!-- post feed -->
        <div class="column is-one-half">
          <Post id="projectPost" :key="post._id" :post="post" :is-mobile="false" :truncate="false" @delete-post="removePostFromPostList" />
        </div>

        <!-- info pane -->
        <div :class="{ firstVisit: this.$store.state.firstVisit.firstVisit }" class="column is-one-quarter">
          <InfoPane>
            <DescriptionCard :subheader-on="false" header-string="Description">
              {{ projectDescription }}
            </DescriptionCard>
            <ProfileCard :name="projectName" :username="name" :profile-picture-url="projectProfilePictureUrl" :subheader-string="`View ${name}'s stats`" :stats="projectStats" type="project" />
            <ProfileCard
              :name="`${adminFirstName} ${adminLastName}`"
              :username="adminUsername"
              :profile-picture-url="adminProfilePictureUrl"
              :subheader-string="`View ${adminFirstName}'s profile`"
              :subheader-url="`/beta/user/${adminUsername}`"
              :stats="profileStats"
              type="user"
            />
            <EditButton v-if="this.$store.state.user.username === adminUsername" @edit-button-clicked="editProject">
              <b>Edit Settings</b>
            </EditButton>
            <SignupCard v-if="!this.$store.state.user.loggedIn" class="fullWidth" />
          </InfoPane>
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div :class="{ firstVisit: this.$store.state.firstVisit.firstVisit }" class="is-marginless is-hidden-desktop mobile-main-margin">
      <Post :key="post._id" :post="post" :is-mobile="true" :truncate="false" @delete-post="removePostFromPostList" />
    </div>
  </div>
</template>

<script>
import DescriptionCard from '~/components/InfoCards/DescriptionCard';
import ProfileCard from '~/components/InfoCards/ProfileCard';
import InfoPane from '~/components/InfoCards/InfoPane';
import EditButton from '~/components/InfoCards/EditButton';
import SignupCard from '~/components/InfoCards/SignupCard';
import Post from '~/components/PostCards/Post';
import Creations from '../../../../../components/SidePaneCards/Creations';
import Subscriptions from '../../../../../components/SidePaneCards/Subscriptions';

export default {
  name: 'ProjectPage',
  components: {
    Subscriptions,
    Creations,
    SignupCard,
    DescriptionCard,
    ProfileCard,
    InfoPane,
    EditButton,
    Post
  },

  data() {
    return {
      name: null,
      bannerPictureUrl: '',
      projectProfilePictureUrl: '',
      projectDescription: '',
      admins: null,
      numSubs: 0,
      projectId: '',
      adminFirstName: '',
      adminLastName: '',
      adminUsername: '',
      projectName: '',
      adminProfilePictureUrl: '',
      projectStats: [],
      profileStats: [],
      post: {}
    };
  },
  computed: {
    isOwner() {
      let isOwner = false;
      if (typeof this.$store.state.user.owned !== 'undefined') {
        for (let i = 0; i < this.$store.state.user.owned.length; i++) {
          if (this.$store.state.user.owned[i].name === this.name) {
            isOwner = true;
          }
        }
      }
      return isOwner;
    },
    isSubscribed() {
      let isSubscribed = false;
      if (typeof this.$store.state.user.subscriptions !== 'undefined') {
        for (let i = 0; i < this.$store.state.user.subscriptions.length; i++) {
          if (this.$store.state.user.subscriptions[i].name === this.name) {
            isSubscribed = true;
          }
        }
      }
      return isSubscribed;
    }
  },
  created() {
    this.name = this.$route.params.projectname;
  },
  async mounted() {
    // #############
    // Can probably add all these to a util function to save space in each index.vue
    // #############

    // get project details
    let infoRes = await this.$axios.$get(`/api/v1/projects/project/${this.name}`);
    this.post = await this.$axios.$get(`/api/v1/posts/${this.$route.params.postId}`);

    this.bannerPictureUrl = infoRes.headerPicture;
    this.projectProfilePictureUrl = infoRes.profilePicture;
    this.projectId = infoRes._id;
    this.projectName = infoRes.projectName;
    this.numSubs = infoRes.subscribers;
    this.projectDescription = infoRes.description;
    this.admins = infoRes.admins;

    // fill project stats
    this.projectStats.push({ name: 'Subs', stat: infoRes.subscribers });
    this.projectStats.push({ name: 'Rep', stat: infoRes.reputation });
    this.projectStats.push({ name: 'Posts', stat: infoRes.postCount });

    // get admin details
    let adminRes = await this.$axios.$get(`/api/v1/profiles/${this.admins[0]}`);
    this.adminFirstName = adminRes.firstName;
    this.adminLastName = adminRes.lastName;
    this.adminUsername = adminRes.username;
    this.adminProfilePictureUrl = adminRes.profilePicture;

    // fill profil estats
    this.profileStats.push({ name: 'Rep', stat: adminRes.reputation });
    this.profileStats.push({ name: 'Posts', stat: adminRes.postCount });
    this.profileStats.push({
      name: 'Replies',
      stat: adminRes.commentCount
    });

    document.title = `Kowalla - @${this.name}`;
  },
  methods: {
    updateSubscriptions(subBool) {
      let subInfo = {
        name: this.name,
        pictureUrl: this.projectProfilePictureUrl,
        numSubs: subBool ? this.projectStats[0].stat + 1 : this.projectStats[0].stat - 1,
        projectId: this.projectId
      };

      this.projectStats[0].stat = subBool ? this.projectStats[0].stat + 1 : this.projectStats[0].stat - 1;

      let subObj = { subBool, ...subInfo };

      this.$store.dispatch('user/updateSubscriptions', subObj);
    },
    editProject() {
      this.$router.push({
        path: `/beta/project/${this.name}/edit`
      });
    },
    async removePostFromPostList() {
      await this.$axios.$delete(`/api/v1/posts/${this.post._id}`);
    }
  }
};
</script>

<style lang="css" scoped>
.column.isMobile {
  width: 50%;
}
div.level {
  top: 0;
}
</style>
