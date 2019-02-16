<template lang="html">
  <div class="screen background-tint">
    <Header></Header>

    <div class="container is-fullhd">
      <!--
          we'll want to dial in the container fullhd breakpoint
          right now it isn't contained to just ultra-wides, and effects
          normal laptop resolution
      -->

      <!-- two columns, navpane and banner -->
      <div class="columns is-marginless is-hidden-touch main-margin">

          <!-- nav pane -->
          <div class="column is-one-quarter is-paddingless side-pane test-outline">
            <NavPane></NavPane>
          </div>

          <div class="column is-three-quarters is-paddingless">

              <Banner
                :bannerURL="bannerPictureURL"
                :bannerTitle="projectName"
                bannerTitlePrefix="@"
                :isSubscribed="isSubscribed"
                :isOwner="isOwner"
                @subscription-button-clicked="updateSubscriptions"
              />

              <!-- new columns for description, profile and project cards -->
              <div class="columns is-marginless main-margin">
                <div class="column is-half is-paddingless test-outline">
                  <DescriptionCard
                    headerString="Description"
                    :subheaderOn="false"
                  >
                  {{projectDescription}}

                  </DescriptionCard>
                </div>

                <div class="column is-half is-paddingless test-outline">
                  <div class="level">
                    <div class="level-item">
                      <ProfileCard
                        :name="projectName"
                        :username="projectName"
                        :profilePictureURL="projectProfilePictureURL"
                        :subheaderString="`View ${projectName}'s stats`"
                        :stats="projectStats"
                        type="project"
                      ></ProfileCard>
                    </div>

                    <div class="level-item">
                      <ProfileCard
                        :name="`${adminFirstName} ${adminLastName}`"
                        :username="adminUsername"
                        :profilePictureURL="adminProfilePictureURL"
                        :subheaderString="`View ${adminFirstName}'s profile`"
                        :stats="profileStats"
                        type="user"
                      ></ProfileCard>
                    </div>
                  </div>

                </div>

              </div>

                <!-- new columns for content and info pane -->
              <div class="columns is-marginless">

                <!-- post feed -->
                <div class="column is-two-thirds test-outline">
                  <b>test</b>
                </div>

                <!-- info pane -->
                <div class="column is-one-third test-outline side-pane">
                  <InfoPane>
                    <!-- fill with children components -->
                    info pane
                  </InfoPane>
                </div>
              </div>

          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header/Header';
import NavPane from '~/components/NavCards/NavPane';
import Banner from '~/components/Banner';
import DescriptionCard from '~/components/InfoCards/DescriptionCard';
import ProfileCard from '~/components/InfoCards/ProfileCard';
import InfoPane from '~/components/InfoCards/InfoPane';

export default {
  name: "user-page-test",
  components: {
    Header,
    NavPane,
    Banner,
    DescriptionCard,
    ProfileCard,
    InfoPane,
  },
  data() {
    return {
      projectName: null,
      bannerPictureURL: '',
      projectProfilePictureURL: '',
      projectDescription: '',
      admins: null,
      isSubscribed: false,
      isOwner: false,
      numSubs: 0,
      projectId: '',
      adminFirstName: '',
      adminLastName: '',
      adminUsername: '',
      adminProfilePictureURL: '',
      projectStats: [
        { "name": "one", "stat": "7"},
        { "name": "two", "stat": "7"},
        { "name": "three", "stat": "7"}
      ],
      profileStats: [
        { "name": "one", "stat": "7"},
        { "name": "two", "stat": "7"},
        { "name": "three", "stat": "7"}
      ]
    }
  },
  created() {
    this.projectName = this.$route.params.projectname;
  },
  async mounted() {
    this.isOwner = this.$store.getters['user/isUserOwner'];
    this.isSubscribed = this.$store.getters['user/isUserSubscribed'];

    let infoRes = await this.$axios.get(`/api/v1/projects/p/${this.projectName}`);

    //------------------
    // remove if statements, but keep assignments in production.
    // they're only for quicker validation to ignore an unhelpful nuxt error throw
    //------------------
    if (infoRes.data.hasOwnProperty('headerPicture')) {
      console.log(infoRes.data.headerPicture)
      this.bannerPictureURL = infoRes.data.headerPicture;
    }
    if (infoRes.data.hasOwnProperty('profilePicture')) {
      this.projectProfilePictureURL = infoRes.data.profilePicture;
    }
    if (infoRes.data.hasOwnProperty('_id')) {
      this.projectId = infoRes.data._id;
    }
    if (infoRes.data.hasOwnProperty('description')) {
      this.projectDescription = infoRes.data.description;
    }
    if (infoRes.data.hasOwnProperty('admins')) {
      this.admins = infoRes.data.admins;
    }

    let adminRes = await this.$axios.get(`/api/v1/profiles/${this.admins[0]}`);
    console.log(adminRes.data);
    if (adminRes.data.hasOwnProperty('firstName')) {
      this.adminFirstName = adminRes.data.firstName;
    }
    if (adminRes.data.hasOwnProperty('lastName')) {
      this.adminLastName = adminRes.data.lastName;
    }
    if (adminRes.data.hasOwnProperty('username')) {
      this.adminUsername = adminRes.data.username;
    }
    if (adminRes.data.hasOwnProperty('profilePicture')) {
      this.adminProfilePictureURL = adminRes.data.profilePicture;
    }

    document.title = `kowalla - @${this.projectName}`;
  },
  computed: {
    getProjectName() {
      return this.projectName;
    }
  },
  methods: {
    updateSubscriptions(subBool) {
      let subInfo = {
        name: this.projectName,
        bannerPictureURL: this.bannerPictureURL,
        numSubs: Number(this.numSubs),
        projectId: this.projectId,
      };

      let subObj = { subBool, ...subInfo };

      this.$store.dispatch('user/updateSubscriptions', subObj)
      this.isSubscribed = subObj.subBool;
    }
  }
}
</script>

<style lang="css" scoped>
</style>
