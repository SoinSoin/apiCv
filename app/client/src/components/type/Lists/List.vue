<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else class="column is-8">
    <div v-if="fetch.length>0" class="columns is-multiline">
      <me-list v-if="$route.params.type==='me'" :data="fetch"></me-list>
      <page-list v-if="$route.params.type==='page'" :data="fetch"></page-list>
      <div class="column is-12">
        <div class="columns is-variable is-8">
          <div class="column is-4"></div>
          <div class="column is-4 is-full-centered">
            <a class="button is-success is-rounded">
              <span class="icon">
                <font-awesome-icon fas icon="plus" size="2x"/>
              </span>
            </a>
          </div>
          <div class="column is-4"></div>
        </div>
      </div>
    </div>
    <error-page v-else :msg="`La page ${$route.params.type} n'existe pas` "></error-page>
  </div>
</template> 

<script>
// import components
import ErrorPage from "@/components/global/Errorpage";
import MeList from "./MeList";
import PageList from "./PageList";
// import service
import Me from "@/services/me";
import Page from "@/services/page";
var caller = {};
caller.me = Me;
caller.page = Page;
export default {
  name: "List",
  components: {
    ErrorPage,
    MeList,
    PageList
  },
  data() {
    return {
      fetch: Array,
      isLoading: true
    };
  },
  beforeMount() {
    this.AllViews();
  },
  methods: {
    AllViews() {
      try {
        caller[this.$route.params.type].AllViews().then(data => {
          this.fetch = data.data.val;
          this.isLoading = false;
        });
      } catch (error) {
        this.isLoading = false;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
