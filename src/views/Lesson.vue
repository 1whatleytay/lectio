<template>
  <div>
    <Testing v-if="stage === 'Testing'" :tests="tests" @finished="nextTesting"/>
    <Learning v-if="stage === 'Learning'" :words="words" @finished="nextLearning"/>
    <Finished v-if="stage === 'Finished'" :info="info"/>
  </div>
</template>

<script>
import axios from 'axios'

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
      result: { },
      tests: [ ],
      words: [ ],
      info: { },
    }
  },

  mounted() {
    getState().state = 'Normal'

    axios.get(`http://142.1.5.223:1645/users/${getState().userId}/difficulty`).then((id) => {
      console.log(id.data)
      axios.get(`http://142.1.5.223:1645/tests/${id.data}`).then((request) => {
        console.log(request.data)
        this.tests = request.data.tests
      })
    })
  },

  methods: {
    nextTesting(words) {
      this.words = words.incorrect
      this.result = words
      console.log(this.result)
      if (this.words.length === 0) {
        this.stage = 'Finished'
      } else {
        this.stage = 'Learning'
      }
    },

    nextLearning(info) {
      axios.post(`http://142.1.5.223:1645/users/${getState().userId}/sessions/add`, this.result)
      this.info = info
      this.stage = 'Finished'
    },
  }
}
</script>