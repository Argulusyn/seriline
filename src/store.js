import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import { getShowsByQuery } from './api';

import { APPLICATION_STORAGE_KEY } from './constants';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    query: '',
    searchedShows: [],
    favoriteShows: []
  },
  getters: {
    query({ query }) {
      return query;
    },
    searchedShows({ searchedShows }) {
      return searchedShows;
    },
    favoriteShows({ favoriteShows }) {
      return favoriteShows;
    }
  },
  mutations: {
    setQuery(state, query) {
      state.query = query;
    },
    setSearchedShows(state, shows) {
      state.searchedShows = shows;
    },
    addFavorite(state, show) {
      state.favoriteShows.push(show);
    },
    addAllFavoriteShows(state, shows) {
      state.favoriteShows = shows;
    }
  },
  actions: {
    async searchByQuery({ commit }, query) {
      const shows = await getShowsByQuery(query);

      commit('setSearchedShows', shows);
    },
    addShowToFavorite({ commit }, show) {
      commit('addFavorite', show);
    },
    setQuery({ commit }, query) {
      commit('setQuery', query);
    }
  },
  plugins: [
    createPersistedState({
      key: APPLICATION_STORAGE_KEY
    })
  ]
});
