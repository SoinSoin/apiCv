<template>
  <div class="column is-10">
    <router-link
      :to="{ name:'edit',params:{name: `${element.firstname}-${element.lastname}`},query:{q:element._id}}"
      class="box box-shadow is-normal padding-box-list"
      :dataTarget="element._id"
      v-for="element in data"
      :key="element._id"
    >
      <div class="columns is-mobile">
        <div class="column is-1"></div>
        <div class="column is-10">
          <div class="columns">
            <div class="column is-5 is-full-centered">
              <figure class="image is-128x128">
                <img class="is-rounded" :src="element.image">
              </figure>
            </div>
            <div class="column is-7 is-full-centered">
              <div class="columns is-multiline">
                <div class="column is-12"></div>
                <div class="column is-12">
                  <h3 class="subtitle is-3">{{element.lastname}} {{element.firstname}}</h3>
                </div>
                <div class="column is-12 has-text-right">
                  <a :href="element.papercv">voir cv papier</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-1 is-paddingless">
          <router-link
            :to="{name:'delete',params:{name: `${element.firstname}-${element.lastname}`},query:{q:element._id}}"
            class="button is-danger position-delete is-large is-full-centered"
          >
            <span class="icon">
              <font-awesome-icon fas icon="trash-alt"/>
            </span>
          </router-link>
        </div>
      </div>
    </router-link>
  </div>
</template> 

<script>
export default {
  name: "MeList",
  props: {
    data: Array
  },
  data() {
    return {
      element: String
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
