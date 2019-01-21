import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Wait from '@/components/Wait'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/wait',
      name: 'Wait',
      component: Wait
    }
  ]
})
