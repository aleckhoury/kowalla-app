<template lang="html">
  <div class="screen background-tint">
    <Header></Header>

    <div class="container is-fullhd">
      <div class="columns is-marginless main-margin">

        <!-- nav pane -->
        <div class="column is-one-quarter is-paddingless side-pane test-outline">
          <NavPane></NavPane>
        </div>

        <!-- post feed -->
        <div class="column is-one-half is-paddingless test-outline">
          post feed
        </div>

        <!-- info pane -->
        <div class="column is-one-quarter is-paddingless test-outline side-pane">
          <InfoPane>
            <ProfileCard
              :name="`${this.firstName} ${this.lastName}`"
              :profilePictureURL="profilePictureURL"
              :username="username"
              :stats="profileStats"></ProfileCard>

            <DescriptionCard
              :headerString="`About ${this.firstName}`"
              :subheaderOn="false">

              {{profileDescription}}

            </DescriptionCard>

            <Card
              v-if="profileSubs.owned.length > 0"
              :headerString="`${this.firstName}'s Projects`"
              headerOn
              :subheaderOn="false"
            >
              <!-- need to make NavCard more flexible -->
              <NavCard type="profile" selector="owned" :profileSubs="profileSubs"></NavCard>
            </Card>

            <Card
              v-if="profileSubs.subscriptions.length > 0"
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
  </div>
</template>

<script>
import NavPane from '~/components/NavCards/NavPane';
import Header from '~/components/Header/Header';
import ProfileCard from '~/components/InfoCards/ProfileCard';
import DescriptionCard from '~/components/InfoCards/DescriptionCard';
import InfoPane from '~/components/InfoCards/InfoPane';
import Card from '~/components/Card';
import NavCard from '~/components/NavCards/NavCard';

export default {
  name: 'UserPageTest',
  components: { NavPane, NavCard, Card, Header, ProfileCard, InfoPane, DescriptionCard },
  data() {
    return {
      username: null,
      profileId: '',
      firstName: '',
      lastName: '',
      profilePictureURL: '',
      profileDescription: '',

      profileStats: [
        { "name": "one", "stat": "7"},
        { "name": "two", "stat": "7"},
        { "name": "three", "stat": "7"}
      ],
      profileSubs: {subscriptions: [], owned: []},
    };
  },
  computed: {
    getUsername() {
      return this.username;
    },
  },
  created() {

    this.username = this.$route.params.username;
  },
  mounted() {
    this.$axios.get(`/api/v1/profiles/u/${this.username}`)
      .then(({data}) => {

        // get name
        if (data.hasOwnProperty('firstName')) {
          this.firstName = data.firstName;
        }
        if (data.hasOwnProperty('lastName')) {
          this.lastName = data.lastName;
        }

        // profile description
        if (data.hasOwnProperty('description')) {
          this.profileDescription = data.description;
        }

        // profile picture
        if (data.hasOwnProperty('profilePicture')) {
          this.profilePictureURL = data.profilePicture;
        }

        // profile Id
        if (data.hasOwnProperty('_id')) {
          this.profileId = data._id;
        }
      }) // end first .then
      .then(() => {

        this.$axios.get(`/api/v1/profiles/CSme8eylU/subs`)
        .then(({data}) => {
          // setup profile Subscriptions
          if (data.hasOwnProperty('profileSubscriptions')) {
            this.profileSubs = data.profileSubscriptions;
          }
        });
      });


  }
};
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
