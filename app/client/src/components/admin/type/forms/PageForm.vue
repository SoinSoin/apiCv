<template>
  <section class="section">
    <!-- <toast v-if="close===false" :dataNotif="res" :close="close" @childClose="childClose"></toast> -->
    <div class="columns">
      <div class="column is-3 is-full-centered">
        <div class="columns is-6 is-multiline">
          <div class="column is-12"></div>
          <div class="columns is-multiline">
            <div class="column is-12 is-full-centered">
              <div class="is-circle has-background-white padding-box-list">
                <!-- nombre -->
                <h1 class="title is-1">{{data.order}}</h1>
              </div>
            </div>
            <div class="column is-12 is-full-centered">
              <div class="box padding-box-list is-rounded-alone">
                <div class="field">
                  <div class="control">
                    <div class="columns is-mobile">
                      <div class="column is-2 is-paddingless"></div>
                      <div class="column is-10 is-paddingless">
                        <!-- input number -->
                        <input
                          class="input is-backgroundless is-borderless is-shadowless"
                          type="number"
                          v-model="data.order"
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-12"></div>
        </div>
      </div>
      <div class="column is-9">
        <div class="columns is-8">
          <div class="column is-3 is-full-centered">
            <div class="box padding-box-list is-full-centered is-circle">
              <font-awesome-icon fas icon="id-card" size="lg"/>
            </div>
          </div>
          <div class="column is-8">
            <div class="box padding-box-list is-rounded-alone">
              <div class="field">
                <div class="control">
                  <div class="columns is-mobile">
                    <div class="column is-2 is-paddingless"></div>
                    <div class="column is-10 is-paddingless">
                      <input
                        class="input is-backgroundless is-borderless is-shadowless"
                        type="text"
                        v-model="data.title"
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-1"></div>
        </div>
        <div v-if="$route.name==='new'" class="columns is-8">
          <div class="column is-3 is-full-centered">
            <div class="box padding-box-list is-full-centered is-circle">
              <font-awesome-icon fas icon="id-card" size="lg"/>
            </div>
          </div>
          <div class="column is-8">
            <div class="box padding-box-list is-rounded-alone">
              <div class="field">
                <div class="control">
                  <div class="columns is-mobile">
                    <div class="column is-2 is-paddingless"></div>
                    <div class="column is-10 is-paddingless">
                      <div class="select is-rounded test">
                        <select>
                          <option>Items</option>
                          <option>Single</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-1"></div>
        </div>
      </div>
    </div>
    <div v-if="$route.name==='edit'" class="columns">
      <div class="column is-2 is-full-centered">
        <div class="box padding-box-list is-circle">
          <font-awesome-icon fas icon="clone" size="lg"/>
        </div>
      </div>
      <div class="column is-10">
        <p class="title is-3 has-text-white is-capitalized">{{data.types}}:</p>
      </div>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div v-if="!data.contents"></div>
        <div v-else class="swiper-slide" v-for="(contents,i) in data.contents" :key="i">
          <component-slide class="shad test" :element="contents"></component-slide>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>

    <!-- {{data.contents[i]}} -->
    <div class="container">
      <div class="columns is-mobile">
        <div class="column is-4"></div>
        <div class="column is-2 is-full-centered">
          <!-- <button @click="sendData()" class="button is-success btn-square is-circle is-full-centered">
            <font-awesome-icon fas icon="check" size="lg"/>
          </button>-->
        </div>
        <div class="column is-2 is-full-centered">
          <!-- <button @click="cancel()" class="button is-danger btn-square is-circle is-full-centered">
            <font-awesome-icon fas icon="times" size="lg"/>
          </button>-->
        </div>
        <div class="column is-4"></div>
      </div>
    </div>
    <!-- <modal
      v-if="toggler===true"
      :dataModal="{url:data.papercv}"
      :toggler="toggler"
      @childToggler="childClick"
    />-->
  </section>
</template>
<script>
//slide swiper js
import Page from "@/services/page";
import ComponentSlide from "./ComponentSlide";
import Swiper from "swiper/dist/js/swiper.min.js";
export default {
  name: "PageForm",
  components: {
    ComponentSlide
  },
  data() {
    return {
      data: {}
    };
  },
  beforeMount() {
    this.callGetApi();
  },
  updated() {
    this.paramsSlide();
  },
  methods: {
    callGetApi() {
      if (this.$route.name === "edit") {
        Page.ViewsTarget(this.$route.query.q).then(data => {
          this.data = data.data.val[0];
        });
      }
    },
    paramsSlide() {
      var swiper = new Swiper(".swiper-container", {
        slidesPerView: 6,
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination"
        },
        breakpoints: {
          932: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          427: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      });
    }
  }
};

// console.log(arrtoto)
</script>
<style>
.shad {
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px -1px rgba(0, 0, 0, 0.3);
}
.swiper-container {
  overflow: initial !important;
}
.test {
  max-width: 160px;
  max-height: 260px;
}
</style>

