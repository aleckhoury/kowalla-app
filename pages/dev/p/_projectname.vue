<template lang="html">
  <div class="screen background-tint">
    <Header></Header>

    <div class="container is-fullhd">
      <!--
          we'll want to dial in the container fullhd breakpoint
          right now it isn't contained to just ultra-wides, and effects
          normal laptop resolution
      -->

      <div class="columns is-hidden-touch is-marginless main-margin">

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

              <!-- this is going to be the description, profile and project card -->
              <div class="columns is-marginless">
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

              <div class="columns is-marginless">
                <div class="column is-two-thirds test-outline">
                  <b>test</b>
                </div>
                <div class="column is-one-third test-outline">
                  info
                </div>
              </div>

          </div>
      </div>
    </div>
  </div>
</template>

<script>
import PlaceholderText from '~/components/PlaceholderText';
import Header from '~/components/Header/Header';
import NavPane from '~/components/NavCards/NavPane';
import Banner from '~/components/Banner';

import DescriptionCard from '~/components/InfoCards/DescriptionCard';
import ProfileCard from '~/components/InfoCards/ProfileCard';

export default {
  name: "user-page-test",
  components: {
    PlaceholderText,
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

.background-tint {
  background-color: #E9EBEE;
}

.main_margin {
  padding-top: 20px;
  padding-left: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
}

.side-pane {
  display: flex;
  justify-content: center;
}

.test-outline {
  border: 1px solid black;
}

.content {
  margin-top: 15px;
  background-color: white;
}

.max-width {
  max-width: 1440px;
}

.screen {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  height: 100%;
}
</style>
