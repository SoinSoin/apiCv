<template>
<div class=" column is-12">{{fetchData}} page</div>
</template> 

<script>
export default {
  name: "PageList",
  props: {
    data: Array
  },
  data() {
    return {
      fetchData: this.data
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
