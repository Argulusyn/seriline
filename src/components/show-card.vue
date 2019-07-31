<template>
    <div v-if="show" class="show-card card" @click="goToDetailPage(show)">
        <div class="card-image">
            <figure v-if="show.image" class="image is-2by3">
                <img :src="show.image.original" alt="Placeholder image">
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-content">
                    <p class="title is-4">{{ show.name }}</p>
                    <p class="subtitle">{{ show.status }}</p>
                    <div class="tags">
                        <span v-for="tag in show.genres" :key="tag" class="tag">{{ tag }}</span>
                    </div>
                </div>
            </div>

            <div class="content">
                {{ description }}
            </div>
        </div>
        <div class="card-content premiered">
            <div class="tags has-addons">
                <span class="tag">Premiered</span>
                <span class="tag is-link">{{ premiereDate }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { getShortShowDescription, getShowPremieredLocaleDate } from '../utils';

export default {
  name: 'ShowCard',
  props: {
    show: {
      type: Object,
      required: true
    }
  },
  computed: {
    description() {
      return getShortShowDescription(this.show);
    },
    premiereDate() {
      return getShowPremieredLocaleDate(this.show);
    }
  },
  methods: {
    goToDetailPage({ id }) {
      this.$router.push(`details/${id}`);
    }
  }
};
</script>

<style scoped>
.show-card {
  cursor: pointer;
}

.content {
  text-align: justify;
}
</style>
