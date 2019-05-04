import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import Recording from './components/Recording.vue'

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
      path: '/recording-test',
      name: 'recording',
      component: Recording
    }
  ]
})
