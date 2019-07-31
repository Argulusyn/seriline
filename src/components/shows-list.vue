<template>
    <div class="list-container">
        <div class="columns">
            <show-card v-for="show in shows" :key="show.id" class="column is-one-quarter" :show="show"></show-card>
        </div>
    </div>
</template>

<script>
import ShowCard from './show-card.vue';

export default {
  name: 'ShowsList',
  components: {
    ShowCard
  },
  props: {
    shows: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.list-container {
  margin: 20px;
}

.columns {
  flex-wrap: wrap;
  justify-content: center;
}

.column {
  margin: 10px;
  border-radius: 10px;
}
</style>
