<template>
    <shows-list :shows="favorites" v-if="favorites"></shows-list>
</template>
<script>
    import ShowsList from "../components/shows-list";
    export default {
        components: {ShowsList},
        data() {
            return {
                favorites: null
            }
        },
        created() {
            this.favorites = this.$store.state.favoriteShows;
        }
    }
</script>
