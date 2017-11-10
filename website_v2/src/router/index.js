import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  },
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
