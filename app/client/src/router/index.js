import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/Index'
import forms from '@/components/type/forms/Index'
import Lists from '@/components/type/Lists/Index'
import type from '@/components/type/Type'
import modal from '@/components/global/Modal'

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
        component: Lists,
        children: [{
          path: 'delete/:name',
          name: 'delete',
          component: modal
        }, ]
      },
      {
        path: 'edit/:name',
        name: 'edit',
        component: forms
      },
      {
        path: 'new/',
        name: 'new',
        component: forms
      },
    ]
  }]
})
