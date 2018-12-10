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
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-1"></div>
        </div>
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
    <div class="columns">
      <div class="column is-12">
        <glide>
          <glide-slide v-for="i in 10" :key="i">
              <p class="">text</p>
          </glide-slide>
        </glide>
      </div>
    </div>
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
export default {
  name: "PageForm",
  created() {}

};

// algo tri pour slide
// var items = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27];
// var arrtoto = []
// var arrpack = []
// var numbColumns = 0

// for(var i=1; i<items.length+1;i++){
// arrpack.push(items[i-1])
// if(i%8==0 || i==items.length){
// 	arrtoto.push(arrpack)
//   arrpack=[]
//   }
// }
// console.log(arrtoto)
</script>
<style>
/* box-shadow: 0 3rem 3rem -1rem rgba(10,10,10,.2); */
</style>

