<template>
    <figure style="z-index: -30">
        <span
            class="star pulsate-bck "
            v-for="(value, index) in paramsStars"
            :key="index"
            :style="{height:value.size+'px', width:value.size+'px', top:value.y+'px',left:value.x+'px'}"
        ></span>
    </figure>
</template>
<script>
export default {
  name: "stars",
  data() {
    return {
      paramsStars: []
    };
  },
  beforeMount() {
    this.GenerateParams();
  },
  methods: {
    GenerateParams() {
      var number = Math.floor(Math.random() * Math.floor(100)) + 100;
      var i = 0;
      while (i < number) {
        var objParam = {};
        objParam.x = Math.floor(Math.random() * Math.floor(window.innerWidth));
        objParam.y = Math.floor(Math.random() * Math.floor(window.innerHeight));
        objParam.size = Math.floor(Math.random() * Math.floor(4)) + 1;
        this.paramsStars.push(objParam);
        i++;
      }
    }
  }
};
</script>
