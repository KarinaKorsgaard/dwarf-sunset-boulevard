import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Order from "./views/Order.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/order/:state",
      name: "order",
      component: Order
    }
  ]
});
