<template>
  <div>
    <Testing v-if="!finished" :tests="tests" @finished="nextTesting"/>
    <Finished v-if="finished"/>
  </div>
</template>

<script>
import axios from 'axios'

import Testing from './Testing.vue'
import Finished from './Finished.vue'

import { getState } from '../script/nav.js'

export default {
  name: 'Placement',

  components: { Testing, Finished },

  data() {
    return {
      tests: [ ],
      finished: false
    }
  },

  mounted() {
    getState().state = 'Comfy'

    axios.get(`${getState().api}/users/${getState().userId}`).then(res => {
      getState().user = res.data.name
    })

    axios.get('/requests/placements-1.json').then((request) => {
      this.tests = request.data.tests
    })
  },

  methods: {
    nextTesting(results) {
      this.finished = true
      axios.post(`${getState().api}/users/${getState().userId}/difficulty/set`, {
        new: Math.max(4 - results.incorrect.length / 4, 0)
      })

      axios.post(`${getState().api}/users/${getState().userId}/sessions/add`, results)
    }
  }
}
</script>