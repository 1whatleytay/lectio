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

    axios.get('/requests/placements-1.json').then((request) => {
      this.tests = request.data.tests
    })
  },

  methods: {
    nextTesting() {
      this.finished = true
    }
  }
}
</script>