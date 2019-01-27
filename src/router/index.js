import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Wait from '@/components/wait'
import PurchaseConfirm from '@/components/PurchaseConfirm'
import PurchaseComplete from '@/components/PurchaseComplete'
import UserSelect from '@/components/UserSelect'

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
    },
    {
      path: '/select',
      name: 'Select',
      component: UserSelect
    }
  ]
})
