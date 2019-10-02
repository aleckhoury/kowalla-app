export const defaultState = () => ({
  _id: '',
  createdAt: '',
  commentCount: 0,
  description: '',
  firstName: '',
  lastName: '',
  owned: [],
  subscriptions: [],
  postCount: 0,
  profilePicture: '',
  reputation: 0,
  updatedAt: '',
  loggedIn: false,
  hasNotifications: false,
  integrations: [],
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
        type = spaces;
        typeId = subObj.spaceId;
      }

      this.$axios.$delete(`/api/v1/profiles/${state._id}/subs/${type}/${typeId}`);
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
    if (subObj.hasOwnProperty('spaceId')) {
      // search by spaceId
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
  async setUser(state, user) {
    state = Object.assign(state, user);
  },
  async setSubs(state, subs) {
    state.subscriptions = subs;
  },
  async clearUser(state) {
    Object.assign(state, defaultState());
  },
  addSubscription(state, subObj) {
    console.log(subObj);
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
  toggleIntegration(state, integrationObj) {
    if (integrationObj.index !== -1) {
      state.integrations.splice(integrationObj.index, 1);
    } else {
      state.integrations.push(integrationObj.name);
    }
  },
  editOwned(state, subObj) {
    if (subObj.hasOwnProperty('spaceId')) {
      // search by spaceId
      for (let i=0; i<state.owned.length; i++) {
        if (state.owned[i].spaceId === subObj.spaceId) {
          state.owned[i].name = subObj.name;
          state.owned[i].pictureUrl = subObj.pictureUrl;
        }
      }
    }

    if (subObj.hasOwnProperty('projectId')) {
      // search by projectId
      for (let i=0; i<state.owned.length; i++) {
        if (state.owned[i].projectId === subObj.projectId) {
          state.owned[i].name = subObj.name;
          state.owned[i].pictureUrl = subObj.pictureUrl;
        }
      }
    }
  }
};
