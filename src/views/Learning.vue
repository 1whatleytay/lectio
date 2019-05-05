<template>
  <div class="w-3/4 mx-auto border border-grey rounded text-center">
    <div class="text-right m-2">{{ index + 1 }}/{{ words.length }}</div>
    <div class="text-4xl mb-2" v-bind:class="{ 'text-red': incorrect }">
      {{ words.length > index ? words[index] : '' }}
    </div>
    <Recording ref="recording" short="true" @record="tryAgain" @finished="checkAnswer"/>
  </div>
</template>

<script>
import axios from 'axios'

import Recording from '../components/Recording.vue'

function process(text) {
  return text.trim().toLowerCase()
}

export default {
  name: 'Learning',

  components: { Recording },

  data() {
    return {
      index: 0,
      words: [ ],
      incorrect: false,
    }
  },

  mounted() {
     axios.get('/requests/analytics-1.json').then((request) => {
       this.$emit('finished', request.data)
    })

    axios.get('/requests/words-1.json').then((request) => {
      this.words = request.data.words
    })
  },

  methods: {
    checkAnswer(result) {
      const correct = (process(result) === process(this.words[this.index]))

      if (correct) {
        this.index++
        if (this.index >= this.words.length) {
          axios.get('/requests/analytics-1.json').then((request) => {
            this.$emit('finished', request.data)
          })
        }
      } else {
        this.incorrect = true
      }
    },

    tryAgain() {
      this.incorrect = false
    }
  }
}
</script>