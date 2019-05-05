<template>
  <div class="w-3/4 mx-auto border border-grey rounded text-center">
    <div class="text-right m-2">{{ index + 1 }}/{{ words.length }}</div>
    <div class="text-4xl mb-2" v-bind:class="{ 'text-red': incorrect }">
      {{ words.length > index ? words[index] : '' }}
    </div>
    <Loading :current="index + 1" :max="words.length" color="bg-red"/>
    <Recording ref="recording" short="true" @record="tryAgain" @finished="checkAnswer"/>
  </div>
</template>

<script>
import axios from 'axios'
import { clean } from '../script/compare.js'

import Recording from '../components/Recording.vue'
import Loading from '../components/Loading.vue'

export default {
  name: 'Learning',

  components: { Recording, Loading },
  props: [ 'words' ],

  data() {
    return {
      index: 0,
      incorrect: false,
    }
  },

<<<<<<< HEAD
  mounted() {
     axios.get('/requests/analytics-1.json').then((request) => {
       this.$emit('finished', request.data)
    })

    axios.get('/requests/words-1.json').then((request) => {
      this.words = request.data.words
    })
  },

=======
>>>>>>> d358b683840decfbd5af282f66a336f89cbcd05e
  methods: {
    checkAnswer(result) {
      const correct = (clean(result) === clean(this.words[this.index]))

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
