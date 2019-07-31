<template>
    <div class="container">
        <div class="field has-addons">
            <p class="control">
                <input :value="searchQuery" class="input" type="text" placeholder="Find a TV series" @input="updateQuery" @keypress.enter="search">
            </p>
            <p class="control">
                <button class="button" @click="search">
                    Search
                </button>
            </p>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'SearchField',
  computed: {
    ...mapGetters({
      query: 'query'
    }),
    searchQuery: {
      get() {
        return this.query;
      },
      set(query) {
        this.setQuery(query);
      }
    }
  },
  methods: {
    ...mapActions({
      searchByQuery: 'searchByQuery',
      setQuery: 'setQuery'
    }),
    search() {
      this.searchByQuery(this.searchQuery);
    },
    updateQuery({ target: { value } }) {
      this.searchQuery = value;
    }
  }
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
}
</style>
