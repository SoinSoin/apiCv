<template>
  <div>
    <me v-if="$route.params.type==='me'"></me>
    <page v-if="$route.params.type==='page'"></page>
  </div>
</template>

<script>
import Me from "@/components/admin/type/Me/Me";
import Page from "@/components/admin/type/Page/Page";
export default {
  name: "Type",
  components: {
    Me,
    Page
  }
};
</script>

<style scoped>
</style>

