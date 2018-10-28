import Vue from 'vue'
import Router from 'vue-router'
import Forms from '@/components/Forms'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Forms',
      component: Forms
    }
  ]
})
