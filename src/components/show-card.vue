<template>
    <div class="card">
        <div class="card-image">
            <figure class="image is-2by3">
                <img :src="show.image.original" alt="Placeholder image">
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-content">
                    <p class="title is-4">{{ show.name }}</p>
                    <p class="subtitle">{{ show.status }}</p>
                    <div class="tags">
                        <span class="tag" v-for="tag in show.genres" :key="tag">{{ tag }}</span>
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
                <span class="tag is-success">{{ premiereDate }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "ShowCard",
  props: {
    show: null
  },
  computed: {
    description() {
      const sentence = this.show.summary.slice(3, -4).slice(0, 180);
      return sentence + "...";
    },
    premiereDate() {
      return new Date(this.show.premiered).toLocaleDateString();
    }
  }
};
</script>

<style scoped>
.content {
  text-align: justify;
}
</style>
