<template>
    <div v-if="show" class="card" @click="goToDetailPage(show)">
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
import { truncate } from 'lodash';
import { REPLACE_TAGS_REGEXP } from '../constants';

const MAX_DESCRIPTION_LENGTH = 180;
const DESCRIPTION_WORDS_SEPARATOR = ' ';

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
      if (this.show.summary) {
        return truncate(this.show.summary, {
          length: MAX_DESCRIPTION_LENGTH,
          separator: DESCRIPTION_WORDS_SEPARATOR
        }).replace(REPLACE_TAGS_REGEXP, '');
      }

      return 'Summary';
    },
    premiereDate() {
      return new Date(this.show.premiered).toLocaleDateString();
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
.content {
  text-align: justify;
}
</style>
