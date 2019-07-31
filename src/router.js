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
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Favorites.vue")
    },
    {
      path: "/details/:id",
      name: "Details",
      component: ShowDetailed
    }
  ]
});
