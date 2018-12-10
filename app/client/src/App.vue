<template>
  <div id="app">
    <cartesien></cartesien>
    <div class="container is-fullhd">
      <nav class="navbar is-primary" style="z-index:30; position:sticky;top:0">
        <content-nav></content-nav>
      </nav>
      <stars></stars>
      <router-view/>
    </div>
  </div>
</template>

<script>
import ContentNav from "@/components/global/ContentNav";
import Stars from "@/components/Stars";
import Cartesien from "@/Cartesien";
export default {
  name: "App",
  components: {
    Stars,
    ContentNav,
    Cartesien
  }
};
</script>

<style>
</style>
