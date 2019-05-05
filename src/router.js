import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import Recording from './components/Recording.vue'
import Analytics from './components/Analytics.vue'

import Hub from './views/Hub.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/analytics-test',
      name: 'analytics',
      component: Analytics
    },
    {
      path: '/recording-test',
      name: 'recording',
      component: Recording
    },
    {
      path:'/hub',
      name:"hub",
      component: Hub
    }
  ]
})
