<template>
  <section class="section ">
    <div class="container">
      <div class="columns">
        <div class="column is-2"></div>
        <list></list>
        <div class="column is-2"></div>
      </div>
    </div>
  </section>
</template>

<script>
import List from "./List";
export default {
  name: "home",
  components: {
    List
  }
};
</script>

<style scoped>
</style>

