<template>
  <div>
    <Learning v-if="stage === 'Learning'" @finished="nextLearning"/>
    <Finished v-if="stage === 'Finished'" :info="finishedInfo"/>
  </div>
</template>

<script>
import Learning from './Learning.vue'
import Finished from './Finished.vue'

export default {
  name: 'Lesson',

  components: { Learning, Finished },

  data() {
    return {
      stage: 'Learning',
      finishedInfo: { },
    }
  },

  methods: {
    nextLearning(info) {
      this.finishedInfo = info
      this.stage = 'Finished'
    }
  }
}
</script>