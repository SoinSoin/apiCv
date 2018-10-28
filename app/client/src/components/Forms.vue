<template>
  <form>
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input v-model="todo.name" class="input" type="text" placeholder="Text input">
      </div>
    </div>
    <div class="field">
      <label class="label">lastName</label>
      <div class="control">
        <input v-model="todo.lastName" class="input" type="text" placeholder="Text input">
      </div>
    </div>
    <div class="field">
      <label class="label">mail</label>
      <div class="control">
        <input v-model="todo.mail" class="input" type="text" placeholder="Text input">
      </div>
    </div>
    <div class="field">
      <div class="control">
        <button class="button is-link" @click="test()">Submit</button>
      </div>
    </div>
  </form>
</template> 

<script>
// import {APIService} from '../services';
// const API_URL = 'http://localhost:4000';
// const apiService = new APIService();

export default {
  name: "Forms",
  data() {
    return {
      showError: false,
      todo: {}
    };
  },
  methods: {
    test() {
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
