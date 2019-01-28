<template>
    <shows-list :shows="favorites" v-if="favorites"></shows-list>
</template>
<script>
import ShowsList from "../components/shows-list";
import {
  getFavoriteShowsFromStorage,
  saveFavoriteShowsToStorage
} from "../services/LocaleStorageService";

export default {
  components: { ShowsList },
  data() {
    return {
      favorites: null
    };
  },
  created() {
    if (!this.$store.state.favoriteShows.length) {
      this.$store.commit("addAllFavoriteShows", getFavoriteShowsFromStorage());
    }
    this.favorites = this.$store.state.favoriteShows;
    window.addEventListener("unload", () => {
      saveFavoriteShowsToStorage(this.$store.state.favoriteShows);
    });
  }
};
</script>
