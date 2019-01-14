<template>
  <div id="admin">
    <!-- <cartesien></cartesien> -->
    <nav class="navbar is-primary" style="z-index:30; position:sticky;top:0">
      <content-nav/>
    </nav>
    <bg-stars/>
    <router-view/>
  </div>
</template>

<script>
import ContentNav from "@/components/admin/global/Nav/ContentNav";
import BgStars from "@/components/admin/global/BgStars";
// import Cartesien from "@/Cartesien";
export default {
  name: "Admin",
  components: {
    BgStars,
    ContentNav,
  }
};
</script>

<style>
</style>
