export const state = () => ({
  authUser: null,
  isUserLoggedIn: true,
  firstName: "Tyler",
  lastName: "O'Briant",
  username: 'tobthecreator',
  description: '',
  uiColor: '',
  activePost: {},
  hasNotifications: false,
  _id: 'C4xtgKOIu', // need to update before playing with sub axios calls
  profilePicture: "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-1/22008280_10214375775686311_4294896327600907217_n.jpg?_nc_cat=108&_nc_ht=scontent-dfw5-2.xx&oh=03f3eadb4364c3a93124ae4179669315&oe=5D1FA7AD",
  subscriptions: [
    {name: "Aceable", pictureURL: 'https://cdn.britannica.com/s:300x300/26/162626-004-C076EDBD.jpg', projectId: "1111", numSubs: 1000},
    {name: "ExNI", pictureURL: 'https://cdn.britannica.com/s:300x300/26/162626-004-C076EDBD.jpg', communityId: "2222", numSubs: 10},
  ],
  owned: [
    {name: "kowalla", pictureURL: 'https://cdn.britannica.com/s:300x300/26/162626-004-C076EDBD.jpg', projectId: "5ujOxFHEK", numSubs: 1000},
    {name: "EarlyAdopters", pictureURL: 'https://cdn.britannica.com/s:300x300/26/162626-004-C076EDBD.jpg', communityId: "upRnGdx-8", numSubs: 10},
  ]
});

export const actions = ({
  async updateSubscriptions({ commit, state }, subObj) {
    // call axios to update
    if (subObj.subBool) {
      // send create subscription

      /* createSub - untested, needs completing
      this.$axios.post(`/api/v1/profiles/${state._id}/subs`);
      */
      commit('addSubscription', subObj);
    } else {
      // send delete subscription
      commit('removeSubscription', subObj);


      /* deleteSub - untested
      let type = '';
      let typeId = '';
      if (subObj.hasOwnProperty('projectId')) {
        type = projects;
        typeId = subObj.projectId;
      } else {
        type = communities;
        typeId = subObj.communityId;
      }

      this.$axios.delete(`/api/v1/profiles/${state._id}/subs/${type}/${typeId}`);
      */
    }
  },
  async updateOwned({ commit, state }, subObj) {
    if (subObj.subBool) {
      commit('addOwned', subObj);
    } else {
      commit('removeOwned', subObj);
    }
  },
  /*
  editOwned({ commit, state }, subObj) {
    if (subObj.hasOwnProperty('communityId')) {
      // search by communityId
    }

    if (subObj.hasOwnProperty('projectId')) {
      // search by projectId
      for (let i=0; i<owned.length; i++) {
        if (owned[i].projectId === subObj.projectId) {
          owned[i].name = subObj.name;
          owned[i].pictureURL = subObj.pictureURL;
        }
      }
    }
  }*/
});

export const getters = ({
  activePost({ activePost }) {
    return activePost;
  },
  isUserSubscribed({subscriptions, owned}) {
    let name = $nuxt._route.fullPath.split('/').pop();

    let isSubscribed = false;

    for (let i=0; i<subscriptions.length; i++) {
      if (subscriptions[i].name === name) {
        isSubscribed = true;
      }
    }

    /* enable only if we need a subscription boolean when we also own it
    for (let i=0; i<owned.length; i++) {
      if (owned[i].name === name) {
        isSubscribed = true;
      }
    }
    */

    return isSubscribed;
  },

  isUserOwner({owned}) {
    // get name of project or community
    let name = $nuxt._route.fullPath.split('/').pop();

    let isOwner = false;
    for (let i=0; i<owned.length; i++) {
      if (owned[i].name === name) {
        isOwner = true;
      }
    }

    return isOwner;
  }
});

export const mutations = {
  async isActivePost(state, payload) {
    state.activePost = payload;
  },
  async setUser(state, user) {
    console.log(state);
    state.authUser = user;
  },
  addSubscription(state, subObj) {
    console.log('adding sub')
    console.log(`subObj: ${subObj}`)
    state.subscriptions.push(subObj);
  },
  removeSubscription(state, subObj) {
    console.log(state);
    console.log(subObj);
    console.log('removing subscriptions');
    for (let i=0; i<state.subscriptions.length; i++) {
      console.log('searching subs');
      if (state.subscriptions[i].name === subObj.name) {
        console.log('splicing subs');
        state.subscriptions.splice(i, 1);
      }
    }
  },
  addOwned(state, subObj) {
    console.log('adding owned')
    console.log(`subObj: ${subObj}`)
    state.owned.push(subObj);
  },
  editProfile(state, editObj) {
    state.firstName= editObj.firstName;
    state.lastName= editObj.lastName;
    state.username= editObj.username;
    state.description= editObj.description;
  },
  removeOwned(state, subObj) {
    console.log(state);
    console.log(subObj);
    console.log('removing owned');
    for (let i=0; i<state.owned.length; i++) {
      console.log('searching owned');
      if (state.owned[i].name === subObj.name) {
        console.log('splicing owned');
        state.owned.splice(i, 1);
      }
    }
  },
  editOwned(state, subObj) {
    console.log('in mutation');
    console.log(subObj);
    if (subObj.hasOwnProperty('communityId')) {
      // search by communityId
      for (let i=0; i<state.owned.length; i++) {
        console.log(i);
        if (state.owned[i].communityId === subObj.communityId) {
          state.owned[i].name = subObj.name;
          state.owned[i].pictureURL = subObj.pictureURL;
        }
      }
    }

    if (subObj.hasOwnProperty('projectId')) {
      // search by projectId

      for (let i=0; i<state.owned.length; i++) {
        console.log(i);
        if (state.owned[i].projectId === subObj.projectId) {
          state.owned[i].name = subObj.name;
          state.owned[i].pictureURL = subObj.pictureURL;
        }
      }
    }
  }
};


/* from the sub model
  profileId
  projectId
  communityId
*/

/* sub array object expectation
  name,
  numSubs,
  pictureURLs,
  projectId,
  communityId,
*/
