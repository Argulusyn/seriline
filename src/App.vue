<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Search</router-link> |
      <router-link to="/favorites">Favorites</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import {
  getFavoriteShowsFromStorage,
  saveFavoriteShowsToStorage,
  getQueryFromStorage,
  saveQueryToStorage
} from "./services/LocaleStorageService";

export default {
  created() {
    this.$store.commit("addAllFavoriteShows", getFavoriteShowsFromStorage());
    this.$store.commit("setQuery", getQueryFromStorage());
  },
  updated() {
    saveFavoriteShowsToStorage(this.$store.state.favoriteShows);
    saveQueryToStorage(this.$store.state.query);
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
