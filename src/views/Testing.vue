<template>
  <div class="w-3/4 mx-auto border border-grey rounded text-center">
    <div class="text-right m-2">{{ index + 1 }}/{{ tests.length }}</div>
    <div class="text-4xl mb-2">
      <span v-for="(word, id) in segments" v-bind:key="id"
        v-bind:class="{ 'text-red': word.state }">{{ (id !== 0 ? ' ' : '') + word.word }}</span>
    </div>
    <Recording @finished="checkAnswer"/>
  </div>
</template>

<script>
import axios from 'axios'
import compare from '../script/compare.js'

import Recording from '../components/Recording.vue'

export default {
  name: 'Testing',

  components: { Recording },

  data() {
    return {
      index: 0,
      tests: [ ],
      segments: [ ],
      incorrect: false,
      wrongWords: [ ],
    }
  },

  mounted() {
    axios.get('/requests/tests-1.json').then((request) => {
      this.tests = request.data.tests

      const splits = this.tests[this.index].split(' ')
      for (let split of splits) {
        this.segments.push({ word: split, state: false })
      }
    })
  },

  methods: {
    checkAnswer(result) {
      const incorrects = compare(result, this.tests[this.index])
      this.wrongWords.concat(incorrects)

      if (incorrects.length === 0) {
        this.index++
        if (this.tests.length <= this.index) {
          this.$emit('finished', this.wrongWords)
        }
      }

      const splits = this.tests[this.index].split(' ')
      this.segments = [ ]
      for (let split of splits) {
        this.segments.push({ word: split, state: incorrects.includes(split) })
      }
    }
  }
}
</script>