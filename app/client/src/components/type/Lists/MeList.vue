<template>
  <div class="column is-12">
    <router-link
      :to="{ name:'edit',params:{name: `${element.firstname}-${element.lastname}`},query:{q:element._id}}"
      class="box box-shadow is-normal padding-box-list"
      :dataTarget="element._id"
      v-for="element in fetchData"
      :key="element._id"
    >
      <!-- <embed type="application/pdf" :src="element.papercv" > -->
      <div class="columns">
        <div class="column is-5 is-full-centered">
          <figure class="image is-128x128">
            <img class="is-rounded" :src="element.image">
          </figure>
        </div>
        <div class="column is-7">
          <div class="columns is-multiline is-full-centered">
            <div class="column is-12 is-paddingless">
              <a class="button is-danger position-delete is-large is-full-centered">
                <span class="icon">
                  <font-awesome-icon fas icon="trash-alt"/>
                </span>
              </a>
            </div>
            <div class="column is-12">
              <h3 class="subtitle is-3">{{element.lastname}} {{element.firstname}}</h3>
            </div>
            <div class="column is-12 has-text-right">
              <a :href="element.papercv">voir cv papier</a>
            </div>
          </div>
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
      fetchData: this.data,
      element: String
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
