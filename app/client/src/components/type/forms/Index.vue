<template>
  <div>
    <span class="tag is-backgroundless is-full-centered edit">
      <font-awesome-icon fas icon="pen" size="2x" class="icon-edit"/>
    </span>
    <me-form v-if="$route.params.type==='me'"></me-form>
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

