import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/admin/home/Index'
import type from '@/components/admin/type/Index'
import modal from '@/components/admin/global/Modal/Modal'

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
    children: [{
        path: '',
        name: 'list',
        children: [{
          path: 'delete/:name',
          name: 'delete',
          component: modal
        }, ]
      },
      {
        path: 'edit/:name',
        name: 'edit',
      },
      {
        path: 'new/',
        name: 'new',
      },
    ]
  }]
})
