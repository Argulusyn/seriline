<template>
    <div>
        <search-field></search-field>
        <shows-list :shows="searchedShows"></shows-list>
    </div>
</template>

<script>
import SearchField from "@/components/search-field.vue";
import ShowsList from "../components/shows-list";

export default {
  name: "Search",
  components: {
    ShowsList,
    SearchField
  },
    computed: {
      searchedShows() {
          return this.$store.state.searchedShows;
      }
    }
};
</script>
