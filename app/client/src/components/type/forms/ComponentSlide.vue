<template>
  <div class="box is-marginless">
    <div class="columns">
      <div class="column is-12">
        <h6 class="title is-6">{{element.titles}}</h6>
      </div>
    </div>
    <div class="columns">
      <div class="column is-12">
        <figure class="image is-64x64">
          <img v-if="element.image" :src="element.image">
        </figure>
      </div>
    </div>
    <div class="columns">
      <div class="column is-12">
        <p>{{element.text}}</p>
      </div>
    </div>
    <div class="columns">
      <div class="column is-12">delete</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ComponentSlide",
  props: {
    element: Object
  },
  beforeMount() {
    var arrPara = this.$props.element.text.split(" ");
    if (arrPara > 14) this.resizePara(arrPara);
  },
  methods: {
    resizePara(arrPara) {
      var newArrPara = [];
      var i = 0;
      while (i < 14) {
        newArrPara.push(arrPara[i]);
        i++;
      }
      var para = newArrPara.join(" ") + " " + "...";
      return (this.$props.element.text = para);
    }
  }
};
</script>

