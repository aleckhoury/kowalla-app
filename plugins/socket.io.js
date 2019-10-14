import Vue from 'vue';
import io from 'socket.io-client';
import VueSocketIO from 'vue-socket.io-extended';

export default ({ store, isDev }) => {
  Vue.use(VueSocketIO, io(process.env.API_URL), { store });
};
