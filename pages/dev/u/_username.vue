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
              name="Tyler O'Briant"
              :username="username"
              :stats="profileStats"></ProfileCard>

            <DescriptionCard
              headerString="About Tyler"
              :subheaderOn="false"
            >about tob</DescriptionCard>

            <Card
              v-if="profileSubs.hasOwnProperty('owned')"
              headerString="Tyler's Projects"
              headerOn
              :subheaderOn="false"
            >
              <!-- need to make NavCard more flexible -->
              <NavCard type="profile" selector="owned" :profileSubs="profileSubs"></NavCard>
            </Card>

            <Card
              v-if="profileSubs.hasOwnProperty('subscriptions')"
              headerString="Tyler's Subscriptions"
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
      profileStats: [
        { "name": "one", "stat": "7"},
        { "name": "two", "stat": "7"},
        { "name": "three", "stat": "7"}
      ],
      profileSubs: {
        subscriptions: [
          {name: "TestProject", pictureURL: 'aaa', projectId: "1111", numSubs: 1000},
          {name: "TestCommunity", pictureURL: 'bbb', communityId: "2222", numSubs: 10},
        ],
        owned: [
          {name: "TestProject", pictureURL: 'aaa', projectId: "1111", numSubs: 1000},
          {name: "TestCommunity", pictureURL: 'bbb', communityId: "2222", numSubs: 10},
        ]
      }
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
