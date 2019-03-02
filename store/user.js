export const state = () => ({
  authUser: null,
  isUserLoggedIn: true,
  name: "Tyler O'Briant",
  username: 'cowboy_morty',
  description: '',
  uiColor: '',
  hasNotifications: false,
  _id: 'C4xtgKOIu', // need to update before playing with sub axios calls
  profilePicture: "https://media.licdn.com/dms/image/C5603AQHR9b4T-gMdDA/profile-displayphoto-shrink_200_200/0?e=1552521600&v=beta&t=OCqWMbZEViWI0AEtPBdiA0-VlrUFfC-wJCR900OQaBE",
  subscriptions: [
    {name: "Aceable", pictureURL: 'aaa', projectId: "1111", numSubs: 1000},
    {name: "ExNI", pictureURL: 'bbb', communityId: "2222", numSubs: 10},
  ],
  owned: [
    {name: "kowalla", pictureURL: 'aaa', projectId: "1111", numSubs: 1000},
    {name: "EarlyAdopters", pictureURL: 'bbb', communityId: "2222", numSubs: 10},
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
  }
});

export const getters = ({
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
