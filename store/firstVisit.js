import Cookies from 'js-cookie';

export const state = () => ({
  firstVisit: false,
});

export const mutations = {
  cancelFirstVisit(state) {
    Cookies.set('firstVisit', true, { expires: 3650 });
    state.firstVisit = !Cookies.get('firstVisit');
  },
  setFirstVisit(state) {
    state.firstVisit = !Cookies.get('firstVisit');
  },
};
