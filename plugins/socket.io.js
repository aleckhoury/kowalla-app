import Vue from 'vue';
import io from 'socket.io-client';
import VueSocketIO from 'vue-socket.io-extended';

export default ({ store, isDev }) => {
  Vue.use(VueSocketIO, io(isDev ? 'http://localhost:8080' : 'https://api.kowalla.co'), { store });
};