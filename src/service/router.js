import Vue from "vue";
import Router from "vue-router";
import store from '../service/store.js'
Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/Employees",
      name: "employees",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/Viewport.vue")
    }
  ],
});
router.afterEach((to, from, next) => {
  if (store.state.drawer) {
    store.dispatch('toggleMenu')
  }
})

export default router

