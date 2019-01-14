<template>
  <div class="notification is-success position-toast slideInUp">
    <button @click="clickClose" class="delete"></button>
    <p>{{dataNotif.msg}}</p>
  </div>
</template>
<script>
export default {
  name: "Toast",
  props: {
    dataNotif: {}
  },
  beforeMount() {
    this.isClose = this.close;
  },
  methods: {
    childClose() {
      return {
        isClose: Boolean
      };
    },
    clickClose() {
      this.isClose = true;
      this.$emit("childClose", this.isClose);
    }
  }
};
</script>