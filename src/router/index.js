import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import QuaziInfo from '@/components/QuaziInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'QuaziInfo',
      component: QuaziInfo
    },
    {
      path: '/hw',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
