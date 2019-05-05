<template>
  <div class="p-4 text-center">
    <button class="w-24 h-24 record-button rounded-full cursor-pointer mb-4"
      v-bind:class="{ 'opacity-50 cursor-not-allowed': !isFinal }" @click="startRecording"></button>
    <SectionedText :text="text" :blur="!isFinal" :incorrect="isFinal ? incorrect : [ ]"/>
  </div>
</template>

<script>
import SectionedText from './SectionedText.vue'

export default {
  name: 'Recording',

  components: { SectionedText },
  props: [ 'short', 'incorrect' ],

  data() {
    return {
      recognition: new webkitSpeechRecognition(),
      isFinal: true,
      text: '',
      currentTimeout: null,
    }
  },

  mounted() {
    this.recognition.lang = 'en-US'
    this.recognition.continuous = true
    this.recognition.interimResults = true
    this.recognition.maxAlternatives = 1
    this.recognition.onresult = this.listen
  },

  methods: {
    listen(data) {
      const last = data.results[data.results.length - 1]
      this.text = last[0].transcript

      if (last.isFinal) {
        this.isFinal = true
        this.close()
        this.$emit('finished', this.text)
      }
    },

    startRecording() {
      this.isFinal = false
      this.text = ''
      this.recognition.start()
      this.$emit('record')
      if (this.short) {
        this.currentTimeout = setTimeout(this.close, 5000)
      }
    },

    close() {
      if (this.currentTimeout) {
        clearTimeout(this.currentTimeout)
      }
      this.recognition.stop()
    },
  }
}
</script>

<style>
.record-button {
  background-color: red;
  background-image: url('/ui/record.png');
  background-size: cover;
}
</style>