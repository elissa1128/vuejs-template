import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Products from "./components/Products.vue";

Vue.use(VueRouter);

export default new VueRouter ({
  mode: 'hash',
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/about",
      component: About
    },
    {
      path: "/products/:id?",
      component: Products,
      props: true,
    },
  ]
})