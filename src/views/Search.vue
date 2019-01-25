<template>
    <div>
        <search-field></search-field>
    </div>
</template>

<script>
// @ is an alias to /src
import SearchField from "@/components/search-field.vue";

export default {
  name: "Search",
  components: {
    SearchField
  }
};
</script>
