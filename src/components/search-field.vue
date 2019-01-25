<template>
    <div class="container">
        <div class="field has-addons">
            <p class="control">
                <input class="input" v-model="query" @keypress.enter="searchByQuery" type="text" placeholder="Find a TV series">
            </p>
            <p class="control">
                <button class="button" @click="searchByQuery">
                    Search
                </button>
            </p>
        </div>
    </div>
</template>

<script>
export default {
  name: "SearchField",
  data() {
    return {
      query: ""
    };
  },
  methods: {
    searchByQuery() {
      this.$store.commit("setQuery", this.query);
    }
  },
  created() {
    this.query = this.$store.state.query;
  }
};
</script>

<style>
div.container {
  display: flex;
  justify-content: center;
}
</style>
