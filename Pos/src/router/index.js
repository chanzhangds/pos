import Vue from 'vue'
import Router from 'vue-router'
import Pos from '@/components/page/Pos'
import Shop from '@/components/page/Shop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pos',
      component: Pos
    },
    {
      path: '/Shop',
      name: 'Shop',
      component: Shop
    }
  ]
})
