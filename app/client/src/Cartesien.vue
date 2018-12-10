<template>
  <div id="repere">
    <span id="x"></span>
    <span id="y"></span>
  </div>
</template>
<script>
export default {
    name:"Cartesien"
}
</script>

<style>
#repere {
  z-index: 1000;
  height: 100%;
  width: 100%;
}
#x {
  position: absolute;
  top: 50%;
  height: 3px;
  width: 100%;
  background: beige;
}
#y {
  position: absolute;
  left: 50%;
  height: 100%;
  width: 3px;
  background: beige;
}
</style>

