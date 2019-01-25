<template>
    <div class="columns detail-container" v-if="show">
        <div class="card column is-one-third">
            <div class="card-image">
                <figure class="image is-2by3" v-if="show.image">
                    <img :src="show.image.original" alt="Placeholder image">
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="subtitle">{{ show.status }}</p>
                        <div class="tags">
                            <span class="tag" v-for="tag in show.genres" :key="tag">{{ tag }}</span>
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
                <div class="tags has-addons" v-if="show.language">
                    <span class="tag">Language</span>
                    <span class="tag is-link">{{ show.language }}</span>
                </div>
                <div class="tags has-addons" v-if="show.rating.average">
                    <span class="tag">Rating</span>
                    <span class="tag is-link">{{ show.rating.average + "/10" }}</span>
                </div>
                <div class="buttons">
                    <div class="button is-link" :href="show.officialSite">Official site</div>
                    <button class="button is-link" :disabled="isFavorite" @click="addToFavorite()">Add to favorites
                        &#9734;
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "ShowDetailed",
  data() {
    return {
      show: null
    };
  },
  created() {
    let show;
    const id = Number(this.$route.params.id);
    show = this.$store.state.searchedShows.filter(element => {
      return !!(element.id && element.id === id);
    });
    if (!show.length) {
      show = this.$store.state.favoriteShows.filter(element => {
        return !!(element.id && element.id === id);
      });
    }
    this.show = show[0];
  },
  computed: {
    description() {
      if (this.show.summary) {
        return this.show.summary.slice(3, -4).replace(/<[^>]+>/g, "");
      }
      return "Summary";
    },
    premiereDate() {
      return new Date(this.show.premiered).toLocaleDateString();
    },
    isFavorite() {
      return (
        this.$store.state.favoriteShows.filter(element => {
          return !!(element.id && element.id === this.show.id);
        }).length > 0
      );
    }
  },
  methods: {
    addToFavorite() {
      this.$store.dispatch("addShowToFavorite", this.show);
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
