<template>
    <shows-list v-if="favorites" :shows="favorites"></shows-list>
</template>
<script>
import ShowsList from '../components/shows-list.vue';

export default {
  components: { ShowsList },
  data() {
    return {
      favorites: null
    };
  },
  created() {
    this.favorites = this.$store.state.favoriteShows;
  }
};
</script>
