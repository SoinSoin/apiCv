<template>
  <section class="section is-medium">
    <div class="container">
      <div class="columns">
        <div class="column is-3"></div>
        <card-home></card-home>
        <div class="column is-3"></div>
      </div>
    </div>
  </section>
</template>

<script>
import CardHome from "./CardHome";
export default {
  name: "home",
  components: {
    CardHome,
  }
};
</script>

<style scoped>
</style>

