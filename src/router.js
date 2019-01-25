import Vue from "vue";
import Router from "vue-router";
import Search from "./views/Search.vue";
import ShowDetailed from "./views/ShowDetailed";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Search",
      component: Search
    },
    {
      path: "/favorites",
      name: "Favorites",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Favorites.vue")
    },
    {
      path: "/details/:index",
      name: "Details",
      component: ShowDetailed
    }
  ]
});
