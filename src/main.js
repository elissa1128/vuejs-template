import '@babel/polyfill';
import Vue from 'vue';
import router from './router';
import App from "App";
import './scss/global.scss';

new Vue({
  el: '#app',
  router,
  render: h=>h(App),
});