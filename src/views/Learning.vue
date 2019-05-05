<template>
  <div class="w-3/4 mx-auto border border-grey rounded text-center">
    <div class="text-right m-2">
      <button class="bg-yellow rounded" @click="skip">Skip</button>
      {{ index + 1 }}/{{ words.length }}
    </div>
    <div class="text-4xl mb-2" v-bind:class="{ 'text-red': incorrect }">
      <!-- {{ words.length > index ? words[index] : '' }} -->
      <span v-html="prettyText"></span>
    </div>
    <Loading :current="index + 1" :max="words.length" color="bg-red"/>
    <Recording ref="recording" short="true" :mimic="words[index]" @record="tryAgain" @finished="checkAnswer"/>
  </div>
</template>

<script>
import axios from 'axios'
import { clean } from '../script/compare.js'

import Recording from '../components/Recording.vue'
import Loading from '../components/Loading.vue'

import Speech from 'speak-tts'

export default {
  name: 'Learning',

  components: { Recording, Loading },
  props: [ 'words' ],

  data() {
    return {
      index: 0,
      incorrect: false,
      prettyText: '',
      speech: new Speech(),
    }
  },

  mounted() {
    this.speech.init().then((data) => {
      this.prettyText = this.words[this.index]
      this.say(this.words[this.index])
    })
  },

  methods: {
    say(text) {
      for (let a = 0; a + 2 < text.length; a += 2) {
        let prom = this.speech.speak({
          text: text.substr(a, 3),
          listeners: {
            onstart: () => {
              console.log('Done')
              this.prettyText = this.words[this.index].replace(text.substr(a, 3),
                '<span class="text-yellow">' + text.substr(a, 3) + '</span>')
            },
            onend: (a + 4 >= text.length) ? () => {
              this.prettyText = this.words[this.index]
            } : () => {}
          }
        })
      }
    },

    checkAnswer(result) {
      const correct = (clean(result) === clean(this.words[this.index]))

      if (correct) {
        this.skip()
      } else {
        this.incorrect = true
      }
    },

    tryAgain() {
      this.incorrect = false
    },

    skip() {
      this.index++
      if (this.index >= this.words.length) {
        this.$emit('finished', { })
      } else {
        this.prettyText = this.words[this.index]
        this.say(this.words[this.index])
      }
    }
  }
}
</script>
