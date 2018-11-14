<template>
  <div class="column is-8">
    <error-page v-if="data.length===0" :msg="`La page ${$route.params.type} n'existe pas` "></error-page>
    
  </div>
</template> 

<script>
import ErrorPage from "@/components/global/Errorpage";
import Me from "@/services/me";
import Page from "@/services/page";
export default {
  name: "CardHome",
  components: {
    ErrorPage
  },
  data() {
    return {
      data: []
    };
  },
  beforeMount() {
    this.AllViews();
  },
  methods: {
    AllViews() {
      if (this.$route.params.type === "me")
        Me.meAllViews().then(data => this.data.push(data.data));
      // switch (this.$route.params.type) {
      //   case "me":
      //     Me.meAllViews().then(data => this.data.push(data.data));
      //     break;
      //   case "page":
      //     Page.pageAllViews().then(data => this.data.push(data.data));
      //     break;
      //   default:
      //     console.error("doesn't exist");
      //     break;
      // }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
