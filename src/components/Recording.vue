<template>
  <div class="p-4 text-center">
    <button class="w-24 h-24 record-button rounded-full cursor-pointer mb-4"
      v-bind:class="{ 'opacity-50 cursor-not-allowed': !isFinal }" @click="startRecording"></button>
    <div class="center-text text-4xl h-min-text" v-bind:class="{ 'blur': !isFinal }">{{ text }}</div>
  </div>
</template>

<script>
import Artyom from 'artyom.js'

const artyomDebug = true;

export default {
  name: 'Recording',

  data() {
    return {
      artyom: new Artyom(),
      isFinal: true,
      text: ''
    }
  },

  mounted() {
    // Init Artyom
    this.artyom.initialize({
      // English
      lang: 'en-US',
      // Enable Speach Recognition
      listen: true,
      // Listen Constantly
      continuous: true,
      // Debug Console Output
      debug: artyomDebug,
      // Speed at which artyom.say() speaks. Not really needed.
      speed: 1,
      // Allows you to use remoteProcessorService, which is nice.
      mode: 'remote'
    }).then(() => {
      this.isFinal = true;

      // Set the listener.
      this.artyom.remoteProcessorService(this.listen)
    })
  },

  methods: {
    listen(data) {
      if (!this.isFinal) {
        this.isFinal = data.isFinal
        this.text = data.text

        if (this.isFinal) {
          this.$emit('finished', this.text)
        }
      }
    },

    startRecording() {
      this.isFinal = false
      this.text = ''
      this.$emit('record')
    }
  }
}
</script>

<style>
.record-button {
  background-color: red;
  background-image: url('/ui/record.png');
  background-size: cover;
}

.h-min-text {
  min-height: 2.4rem;
}

.blur {
  color: transparent;
	text-shadow: 0 0 16px #000;
}
</style>