<template>
  <me-form v-if="$route.params.type==='me'"></me-form>
</template>

<script>
import MeForm from "./MeForm";
export default {
  name: "forms",
  components: {
    MeForm
  }
};
</script>

<style scoped>
</style>

