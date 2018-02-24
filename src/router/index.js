import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/MainIndex.vue'
import SideBar from './../components/SideBar.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainIndex',
      component: Main
    },
    {
      path: '/about',
      name: 'About',
      component: SideBar
    }
  ]
})
