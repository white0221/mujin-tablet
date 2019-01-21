import Vue from 'vue'
import Router from 'vue-router'
import Wait from '@/components/Wait'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Wait',
      component: Wait
    }
  ]
})
