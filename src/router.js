import Vue from 'vue'
import Router from 'vue-router'

// Components
import Recording from './components/Recording.vue'
import Analytics from './components/Analytics.vue'

// Views
import Lesson from './views/Lesson.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/lesson',
      name: 'lesson',
      component: Lesson
    },

    // Tests
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
  ]
})