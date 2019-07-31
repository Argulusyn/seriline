<template>
    <div>
        <search-field></search-field>
        <shows-list :shows="searchedShows"></shows-list>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

import SearchField from '@/components/search-field.vue';
import ShowsList from '../components/shows-list';

export default {
  name: 'Search',
  components: {
    ShowsList,
    SearchField
  },
  computed: {
    ...mapGetters({
      searchedShows: 'searchedShows'
    })
  }
};
</script>
