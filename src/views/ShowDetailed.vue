<template>
    <div v-if="show" class="columns detail-container">
        <div class="card column is-one-third">
            <div class="card-image">
                <figure v-if="show.image" class="image is-2by3">
                    <img :src="show.image.original" alt="Placeholder image">
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="subtitle">{{ show.status }}</p>
                        <div class="tags">
                            <span v-for="tag in show.genres" :key="tag" class="tag">{{ tag }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-content">
                <div class="tags has-addons">
                    <span class="tag">Premiered</span>
                    <span class="tag is-link">{{ premiereDate }}</span>
                </div>
            </div>
        </div>
        <div class="column with-description">
            <div class="description">
                <p class="title is-4">{{ show.name }}</p>
                <div class="content">
                    {{ description }}
                </div>
                <div v-if="show.language" class="tags has-addons">
                    <span class="tag">Language</span>
                    <span class="tag is-link">{{ show.language }}</span>
                </div>
                <div v-if="show.rating.average" class="tags has-addons">
                    <span class="tag">Rating</span>
                    <span class="tag is-link">{{ show.rating.average + "/10" }}</span>
                </div>
                <div class="buttons">
                    <a class="button is-link" :href="show.officialSite">Official site</a>
                    <button class="button is-link" :disabled="isFavorite" @click="addToFavorite()">Add to favorites
                        &#9734;
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { getShowDescription, getShowPremieredLocaleDate } from '../utils';

export default {
  name: 'ShowDetailed',
  data() {
    return {
      show: null
    };
  },
  computed: {
    ...mapGetters({
      favoriteShows: 'favoriteShows',
      searchedShows: 'searchedShows'
    }),
    description() {
      return getShowDescription(this.show);
    },
    premiereDate() {
      return getShowPremieredLocaleDate(this.show);
    },
    isFavorite() {
      return this.favoriteShows.some(({ id }) => id === this.show.id);
    }
  },
  created() {
    const allShows = this.searchedShows.concat(this.favoriteShows);
    const showId = Number(this.$route.params.id);

    this.show = allShows.find(({ id }) => id === showId);
  },
  methods: {
    ...mapActions({
      addShowToFavorite: 'addShowToFavorite'
    }),
    addToFavorite() {
      this.addShowToFavorite(this.show);
    }
  }
};
</script>

<style scoped>
.detail-container {
  margin: 10px 20%;
}

.content {
  text-align: justify;
}

.description {
  padding: 0 5%;
}
</style>
