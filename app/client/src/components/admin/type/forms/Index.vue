<template>
  <div>
    <span class="tag is-backgroundless is-full-centered edit">
      <font-awesome-icon fas icon="pen" size="2x" class="icon-edit"/>
    </span>
    <me-form v-if="$route.params.type==='me'"></me-form>
    <page-form v-if="$route.params.type==='page'"></page-form>
  </div>
</template>

<script>
import MeForm from "./MeForm";
import PageForm from "./PageForm";
export default {
  name: "forms",  
  props: {
    dataTarget: String
  },
  components: {
    MeForm,
    PageForm
  }
};
</script>

<style scoped>
</style>

