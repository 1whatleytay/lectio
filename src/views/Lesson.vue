<template>
  <div>
    <Testing v-if="stage === 'Testing'" :tests="tests" @finished="nextTesting"/>
    <Learning v-if="stage === 'Learning'" :words="words" @finished="nextLearning"/>
    <Finished v-if="stage === 'Finished'" :info="info"/>
  </div>
</template>

<script>
import Testing from './Testing.vue'
import Learning from './Learning.vue'
import Finished from './Finished.vue'

import { getState } from '../script/nav.js'

export default {
  name: 'Lesson',

  components: { Testing, Learning, Finished },

  data() {
    return {
      stage: 'Testing',
      tests: [ ],
      words: [ ],
      info: { },
    }
  },

  mounted() {
    getState().state = 'Normal'


    axios.get('/requests/tests-1.json').then((request) => {
      this.tests = request.data.tests
    })
  },

  methods: {
    nextTesting(words) {
      this.words = words
      if (this.words.length === 0) {
        this.stage = 'Finished'
      } else {
        this.stage = 'Learning'
      }
    },

    nextLearning(info) {
      this.info = info
      this.stage = 'Finished'
    },
  }
}
</script>