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

          <div class="column is-one-quarter is-paddingless side-pane test-outline">
            <NavPane></NavPane>
          </div>

          <div class="column is-three-quarters is-paddingless">

              <Banner
                bannerURL=""
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
                    subheaderString="test substring"
                    subheaderURL="/about"
                  >
                  Test content

                  </DescriptionCard>
                </div>

                <div class="column is-half is-paddingless test-outline">
                  <div class="level">
                    <div class="level-item">
                      <ProfileCard
                        name="Aceable"
                        username="@Aceable"
                        :stats="stats"
                      ></ProfileCard>
                    </div>

                    <div class="level-item">
                      <ProfileCard
                        name="Tyler O'Briant"
                        username="@cowboy_morty"
                        :stats="stats"
                      ></ProfileCard>
                    </div>
                  </div>

                </div>

              </div>

                <!-- new columns for content and info pane -->
              <div class="columns is-marginless">
                <div class="column is-two-thirds test-outline">
                  <b>test</b>
                </div>
                <div class="column is-one-third test-outline">
                  <DescriptionCard
                    subheaderString="test substring"
                    subheaderURL="/about"
                  >
                  Test content

                </DescriptionCard>
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

export default {
  name: "user-page-test",
  components: {
    Header,
    NavPane,
    Banner,
    DescriptionCard,
    ProfileCard,
  },
  data() {
    return {
      projectName: null,
      pictureURL: '',
      isSubscribed: false,
      isOwner: false,
      numSubs: 0,
      projectId: '',
      stats: [
        { "name": "one", "stat": "7"},
        { "name": "two", "stat": "7"},
        { "name": "three", "stat": "7"}
      ]
    }
  },
  created() {
    this.projectName = this.$route.params.projectname;
  },
  mounted() {
    //let projectObj = axiosCallToDatabase();
    let projectObj = {
      name: "Aceable",
      numSubs: 1000,
      projectId: '1111',
      pictureURL: '',
    }

    // get info from obj
    this.name = projectObj.name;
    this.pictureURL = projectObj.pictureURL;
    this.numSubs = projectObj.numSubs;
    this.projectId = projectObj.projectId;

    // get info from state
    this.isSubscribed = this.$store.getters['user/isUserSubscribed'];
    this.isOwner = this.$store.getters['user/isUserOwner'];

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
        pictureURL: this.pictureURL,
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
