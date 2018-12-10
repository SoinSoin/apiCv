<template>
  <div class="container">
    <div class="navbar-menu container-items-nav">
      <div class="navbar-start"></div>
    </div>
    <div class="navbar-brand container-items-nav is-full-centered">
      <div class="navbar-item">
        <router-link
          class="button is-rounded is-small is-light"
          :to="{name:'list',params:{type:'page'}}"
        >Contenu</router-link>
      </div>
      <div class="navbar-item">
        <router-link class="button is-circle is-light" :to="{name:'home'}">
          <span class="icon">
            <font-awesome-icon fas icon="home"/>
          </span>
        </router-link>
      </div>
      <div class="navbar-item">
        <router-link
          class="button is-rounded is-small is-light"
          :to="{name:'list',params:{type:'me'}}"
        >Personne</router-link>
      </div>
      <span class="navbar-burger burger" data-target="navMenu">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </div>
    <div id="navMenu" class="navbar-menu container-items-nav">
      <div class="navbar-end">
        <a href="#" class="navbar-item is-active">Home</a>
        <a href="#" class="navbar-item">Blog</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "contentnav",
  mounted() {
    this.clickNavResp();
  },
  methods: {
    clickNavResp() {
      (function() {
        var burger = document.querySelector(".burger");
        var nav = document.querySelector("#" + burger.dataset.target);

        burger.addEventListener("click", function() {
          burger.classList.toggle("is-active");
          nav.classList.toggle("is-active");
        });
      })();
    }
  }
};
</script>
