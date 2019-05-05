<template>
  <div class="w-3/4 mx-auto border border-grey rounded text-center">
    <div class="text-right m-2">{{ index + 1 }}/{{ tests.length }}</div>
    <SectionedText :text="text" :incorrect="incorrect"/>
    <Loading :current="index + 1" :max="tests.length" color="bg-blue-dark"/>
    <Recording :incorrect="incorrect" @finished="checkAnswer"/>
  </div>
</template>

<script>
import axios from 'axios'
import { clean, compare } from '../script/compare.js'

import Recording from '../components/Recording.vue'
import Loading from '../components/Loading.vue'
import SectionedText from '../components/SectionedText.vue'

export default {
  name: 'Testing',

  components: { Recording, Loading, SectionedText },
  props: [ 'tests' ],
  watch: {
    tests() {
      this.text = this.tests[this.index]
    }
  },

  data() {
    return {
      index: 0,
      text: '',
      incorrect: [ ],
      wrongWords: [ ],
    }
  },

  methods: {
    checkAnswer(result) {
      this.incorrect = compare(result, this.tests[this.index])
      this.wrongWords = this.wrongWords.concat(this.incorrect)

      if (this.incorrect.length === 0) {
        this.index++
        if (this.tests.length <= this.index) {
          this.$emit('finished', this.wrongWords)
          return
        }
      }

      this.text = this.tests[this.index]
    }
  }
}
</script>