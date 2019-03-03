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
import EditButton from '~/components/InfoCards/EditButton';
import EditProfileModal from '~/components/Modals/Edit/EditProfileModal';

export default {
  name: 'UserPageTest',
  components: { NavPane, NavCard, Card, Header, ProfileCard, InfoPane, DescriptionCard, EditButton, EditProfileModal },
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
  methods: {
    callEditProfileModal() {
      console.log('edit profile settings pressed')
      
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
    }
  },
  created() {

    this.username = this.$route.params.username;
  },
  async mounted() {


    let infoRes =  await this.$axios.get(`/api/v1/profiles/u/${this.username}`);

    //------------------
    // remove if statements, but keep assignments in production.
    // they're only for quicker validation to ignore an unhelpful nuxt error throw
    //------------------
    // get name
    if (infoRes.data.hasOwnProperty('firstName')) {
      this.firstName = infoRes.data.firstName;
    }
    if (infoRes.data.hasOwnProperty('lastName')) {
      this.lastName = infoRes.data.lastName;
    }

    // profile description
    if (infoRes.data.hasOwnProperty('description')) {
      this.profileDescription = infoRes.data.description;
    }

    // profile picture
    if (infoRes.data.hasOwnProperty('profilePicture')) {
      this.profilePictureURL = infoRes.data.profilePicture;
    }

    // profile Id
    if (infoRes.data.hasOwnProperty('_id')) {
      this.profileId = infoRes.data._id;
    }

    let subRes  = await this.$axios.get(`/api/v1/profiles/${this.profileId}/subs`);
    // console.log(subRes);
    if (subRes.data.hasOwnProperty('profileSubscriptions')) {
      // console.log(subRes.data.profileSubscriptions);
      this.profileSubs = subRes.data.profileSubscriptions;
    }

    document.title = `kowalla - ${this.firstName} ${this.lastName}`;
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
