<template>
  <div class="column is-6">
    <router-link
      class="box box-shadow is-normal"
      v-for="element in data"
      :key="element._id"
      :to="{ name:'list',params:{type: element.typeof}}"
    >
      <div class="columns">
        <div class="column is-4 is-full-centered">
          <span class="icon is-large has-text-centered">
            <font-awesome-icon v-if="element.typeof==='me'" fas icon="user" size="3x"/>
            <font-awesome-icon
              v-if="element.typeof==='page' && element.val.length>1"
              fas
              icon="copy"
              size="3x"
            />
            <font-awesome-icon
              v-if="element.typeof==='page' && element.val.length<=1"
              fas
              icon="file"
              size="3x"
            />
          </span>
        </div>
        <div class="column is-6">
          <div class="columns">
            <div class="column is-8">
              <div class="is-full-centered">
                <h2
                  class="title is-2 is-size-1-fullhd has-text-centered is-begin-maj"
                >{{element.typeof}}</h2>
              </div>
            </div>
            <div class="column is-6">
              <div class="columns is-multiline">
                <div class="column is-12"></div>
                <div class="column is-12 is-full-centered">
                  <h6
                    class="subtitle is-6 is-size-1-fullhd has-text-centered"
                  >nombre: {{element.val.length}}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template> 

<script>
import Me from "@/services/me";
import Page from "@/services/page";

export default {
  name: "CardHome",
  data() {
    return {
      data: []
    };
  },
  beforeMount() {
    this.AllViews();
  },
  // faire une méthode qui permet stocker mes valeurs de routing  dans un array dans le local storage.
  methods: {
    AllViews() {
      Me.AllViews().then(data => this.data.push(data.data));
      Page.AllViews().then(data => this.data.push(data.data));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
