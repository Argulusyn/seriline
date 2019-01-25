import Vue from "vue";
import Vuex from "vuex";
import { getShowsByQuery } from "./services/ShowsService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    query: "",
    searchedShows: [],
    favoriteShows: []
  },
  mutations: {
    setQuery(state, query) {
      state.query = query;
    },
    setSearchedShows(state, shows) {
      state.searchedShows = shows;
    }
  },
  actions: {
    searchByQuery({ commit }, query) {
      commit("setQuery", query);
      getShowsByQuery(query).then(
        data => commit("setSearchedShows", data),
        error => console.log(error)
      );
    }
  }
});
