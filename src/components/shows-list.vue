<template>
    <div class="list-container">
        <div class="columns">
            <show-card class="column is-one-quarter" v-for="show in shows" :show="show" :key="show.id"></show-card>
        </div>
    </div>
</template>

<script>
    import ShowCard from "./show-card";

    export default {
        name: "ShowsList",
        components: {
            ShowCard
        },
        props: {
            shows: null
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
