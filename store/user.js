export const defaultState = () => ({
  _id: '',
  createdAt: '',
  activePost: {},
  commentCount: 0,
  description: '',
  firstName: '',
  lastName: '',
  owned: [],
  subscriptions: [],
  postCount: 0,
  profilePicture: '',
  reputation: 0,
  uiColor: '',
  updatedAt: '',
  loggedIn: false,
  hasNotifications: false,
});

const initialState = defaultState();

export const actions = ({
  async updateSubscriptions({ commit, state }, subObj) {
    // call axios to update
    if (subObj.subBool) {
      // send create subscription

      /* createSub - untested, needs completing
      this.$axios.$post(`/api/v1/profiles/${state._id}/subs`);
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
    if (activePost) {
      return Object.keys(activePost).length ? activePost : {};
    }
  },
  isUserSubscribed: ({subscriptions, owned}) => (name) => {
    let isSubscribed = false;
    if (typeof subscriptions !== 'undefined') {
    for (let i = 0; i < subscriptions.length; i++) {
      if (subscriptions[i].name === name) {
        isSubscribed = true;
      }
    }
  }
    /* enable only if we need a subscription boolean when we also own it
    for (let i=0; i<owned.length; i++) {
      if (owned[i].name === name) {
        isSubscribed = true;
      }
    }
    */
    console.log(isSubscribed);
    return isSubscribed;
  },

  isUserOwner: ({owned}) => (name) => {
    let isOwner = false;
    if (typeof owned !== 'undefined') {
      for (let i=0; i< owned.length; i++) {
        if (owned[i].name === name) {
          isOwner = true;
        }
      }
    }
    return isOwner;
  },
  // isUserOwner({owned}) {
  //   // get name of project or community
  //   let name = $nuxt._route.fullPath.split('/').pop();
  //
  //   let isOwner = false;
  //   for (let i=0; i<owned.length; i++) {
  //     if (owned[i].name === name) {
  //       isOwner = true;
  //     }
  //   }
  //   return isOwner;
  // },

  getProjectIds({ owned }) {
    let projectIdsArray = [];
    for (let i in owned) {
      if (owned[i].hasOwnProperty('projectId')) {
        projectIdsArray.push(owned[i].projectId);
      }
    }
    return projectIdsArray;
  }
});

export const mutations = {
  async isActivePost(state, payload) {
    state.activePost = payload;
  },
  async setUser(state, user) {
    state = Object.assign(state, user);
  },
  async setSubs(state, subs) {
    state.subscriptions = subs;
  },
  async clearUser(state) {
    state = Object.assign(state, defaultState());
  },
  addSubscription(state, subObj) {
    state.subscriptions.push(subObj);
  },
  removeSubscription(state, subObj) {
    for (let i=0; i<state.subscriptions.length; i++) {
      if (state.subscriptions[i].name === subObj.name) {
        state.subscriptions.splice(i, 1);
      }
    }
  },
  addOwned(state, subObj) {
    state.owned.push(subObj);
  },
  editProfile(state, editObj) {
    state.firstName= editObj.firstName;
    state.lastName= editObj.lastName;
    state.username= editObj.username;
    state.description= editObj.description;
  },
  removeOwned(state, subObj) {
    for (let i=0; i<state.owned.length; i++) {
      if (state.owned[i].name === subObj.name) {
        state.owned.splice(i, 1);
      }
    }
  },
  editOwned(state, subObj) {
    if (subObj.hasOwnProperty('communityId')) {
      // search by communityId
      for (let i=0; i<state.owned.length; i++) {
        if (state.owned[i].communityId === subObj.communityId) {
          state.owned[i].name = subObj.name;
          state.owned[i].pictureURL = subObj.pictureURL;
        }
      }
    }

    if (subObj.hasOwnProperty('projectId')) {
      // search by projectId
      for (let i=0; i<state.owned.length; i++) {
        if (state.owned[i].projectId === subObj.projectId) {
          state.owned[i].name = subObj.name;
          state.owned[i].pictureURL = subObj.pictureURL;
        }
      }
    }
  }
};
