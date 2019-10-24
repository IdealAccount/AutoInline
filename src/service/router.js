import Vue from "vue";
import Router from "vue-router";
import store from '../service/store.js'
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
router.afterEach((to, from, next) => {
  if (store.state.drawer) {
    store.dispatch('toggleMenu')
  }
})

export default router

