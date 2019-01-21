import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Wait from '@/components/Wait'
import PurchaseConfirm from '@/components/PurchaseConfirm'
import PurchaseComplete from '@/components/PurchaseComplete'

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
    },
    {
      path: '/confirm',
      name: 'Confirm',
      component: PurchaseConfirm
    },
    {
      path: '/complete',
      name: 'Complete',
      component: PurchaseComplete
    }
  ]
})
