import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Top from '@/components/Top'
import History from '@/components/History'
import Schedule from '@/components/Schedule'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'top',
      component: Top
    },
    {
      path: '/history',
      name: 'History',
      component: History
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: Schedule
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
