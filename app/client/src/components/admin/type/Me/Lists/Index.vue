<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-2"></div>
        <list></list>
        <div class="column is-2 is-full-centered">
          <router-link :to="{name:'new'}" class="button is-success btn-square is-circle">
            <span class="icon">
              <font-awesome-icon fas icon="plus" size="2x"/>
            </span>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import List from "./List";
export default {
  name: "Index",
  components: {
    List
  }
};
</script>

<style scoped>
</style>

