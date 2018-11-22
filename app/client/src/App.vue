<template>
  <div id="app">
    <div class="container is-fullhd">
      <stars></stars>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Stars from "@/components/Stars";
export default {
  name: "App",
  components:{
    Stars
  }
};
</script>

<style>
</style>
