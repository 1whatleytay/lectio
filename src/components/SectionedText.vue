<template>
  <div class="text-4xl h-min-text" v-bind:class="{ 'blur': blur }">
    <span v-for="(word, id) in segments" v-bind:key="id"
      v-bind:class="{ 'text-red': word.state }">{{ (id !== 0 ? ' ' : '') + word.word }}</span>
  </div>
</template>

<script>
import { clean } from '../script/compare.js'

export default {
  name: 'SectionedText',

  props: [ 'text', 'blur', 'incorrect' ],
  watch: {
    text() { this.reeval() },
    incorrect() { this.reeval() },
  },

  data() {
    return {
      segments: [ ]
    }
  },

  methods: {
    reeval() {
      const splits = clean(this.text).split(' ')
      this.segments = [ ]
      for (let split of splits) {
        this.segments.push({ word: split, state: this.incorrect ? this.incorrect.includes(split) : false })
      }
    }
  }
}
</script>

<style>
.h-min-text {
  min-height: 2.4rem;
}

.blur {
  color: transparent;
	text-shadow: 0 0 16px #000;
}
</style>