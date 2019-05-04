<template>
  <div>
  </div>
</template>

<script>
import Testing from './Testing.vue'
import Finished from './Finished.vue'

const Stage = {
  LEARNING = 0,
  TESTING = 1,
  FINISHED = 2,
}

export default {
  name: 'Lesson',

  components: { Testing, Finished }
}
</script>