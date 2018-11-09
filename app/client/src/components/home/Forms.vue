<template>
  <button>test</button>
</template> 

<script>
import Me from "@/services/me";

export default {
  name: "Forms",
  data() {
    return {
      home: null
    }
  },
  methods: {},
  // async meAllViews() {}
}
try {
  const res =  Me.meAllViews({});
  console.log(res);
} catch (error) {
  console.log("erreur", error);
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
