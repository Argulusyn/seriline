<template>
    <div class="container">
        <div class="field has-addons">
            <p class="control">
                <input class="input" type="text" placeholder="Find a TV series">
            </p>
            <p class="control">
                <button class="button">
                    Search
                </button>
            </p>
        </div>
    </div>
</template>

<script>
export default {
  name: "SearchField",
  props: {
    msg: String
  }
};
</script>

<style>
div.container {
  display: flex;
  justify-content: center;
}
</style>
