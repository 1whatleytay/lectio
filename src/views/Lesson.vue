<template>
  <div>
    <Testing v-if="stage === 'Testing'" @finished="nextTesting"/>
    <Learning v-if="stage === 'Learning'" @finished="nextLearning"/>
    <Finished v-if="stage === 'Finished'" :info="info"/>
  </div>
</template>

<script>
import Testing from './Testing.vue'
import Learning from './Learning.vue'
import Finished from './Finished.vue'

export default {
  name: 'Lesson',

  components: { Testing, Learning, Finished },

  data() {
    return {
      stage: 'Finished',
      words: [ ],
      info: { },
    }
  },

  methods: {
    nextTesting(words) {
      this.words = words
      this.stage = 'Learning'
    },

    nextLearning(info) {
      this.info = info
      this.stage = 'Finished'
    },
  }
}
</script>