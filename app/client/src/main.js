// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "./assets/sass/style.scss"
import 'vue-glide-js/dist/vue-glide.css'
import {
  Glide,
  GlideSlide
} from 'vue-glide-js'
import Vue from 'vue'
import App from './App'
import router from './router'
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  fas
} from '@fortawesome/free-solid-svg-icons'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'
library.add(fas)
Vue.component('glide', Glide)
Vue.component('glide-slide', GlideSlide)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
