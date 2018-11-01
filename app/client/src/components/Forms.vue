<template>
  <form>
    <img src="http://192.168.99.100:3000/public/uploads/images/me/1540997619862-me.jpg">
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input v-model="me.fname" class="input" type="text" placeholder="Text input">
      </div>
    </div>
    <div class="field">
      <label class="label">lastName</label>
      <div class="control">
        <input v-model="me.lname" class="input" type="text" placeholder="Text input">
      </div>
    </div>
    <div class="field">
      <label class="label">mail</label>
      <div class="control">
        <input v-model="me.mail" class="input" type="text" placeholder="Text input">
      </div>
    </div>
    <div class="field">
      <div class="control">
        <button class="button is-link" @click="create">Submit</button>
      </div>
    </div>
  </form>
</template> 

<script>
import Me from "@/services/me";
export default {
  name: "Forms",
  data() {
    return {
      showError: false,
      me: {}
    };
  },
  methods: {
    async create() {
      try {
        const response = await Me.create({
          lastname: this.me.lname,
          firstname: this.me.fname,
          email: this.me.mail
        });
        this.me = "";
      } catch (error) {
        console.log("erreur", error);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
