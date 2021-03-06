import Vue from "vue";
import Router from "vue-router";
import Viewport from '../views/Viewport'
Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "employees",
      component: Viewport
    }
  ],
});

export default router

