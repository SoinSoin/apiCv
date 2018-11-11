<template>
  <div class="column is-6">
    <div class="box" v-for="element in data">
      <div class="columns">
        <div class="column is-4">
          <font-awesome-icon v-if="element.typeof==='me'" fas icon="user" size="3x"/>
          <font-awesome-icon v-if="element.typeof==='page'" fas icon="paperclip" size="3x"/>
        </div>
        <div class="column is-8">{{element.typeof}}{{element.val.length}}</div>
      </div>
    </div>
  </div>
</template> 

<script>
import Me from "@/services/me";
import Page from "@/services/page";

export default {
  name: "Forms",
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
      Me.meAllViews().then(data => this.data.push(data.data));
      Page.pageAllViews().then(data => this.data.push(data.data));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
