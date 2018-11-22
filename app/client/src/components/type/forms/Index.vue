<template>
  <div>
    <me-form v-if="$route.params.type==='me'"></me-form>
    {{dataTarget}}
  </div>
</template>

<script>
import MeForm from "./MeForm";
export default {
  name: "forms",
  props: {
    dataTarget: String
  },
  components: {
    MeForm
  }
};
</script>

<style scoped>
</style>

