import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/Index'
import type from '@/components/type/Index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [{  
    path: '/home',
    name: 'home',
    component: home
  }, {
    path: '/type/:type',
    name: 'type',
    component: type,
  }]
})
