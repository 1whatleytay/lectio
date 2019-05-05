<template>
  <div id="app">
    <div v-if="navState.state !== 'NoShow'">
      <div v-if="navState.state === 'Normal'" class="shadow text-5xl" :class="navState.color" id="nav">
        Lectio {{ navState.user }}
      </div>
      <div v-if="navState.state === 'Comfy'" class="shadow flex" :class="navState.color" id="nav">
        <div class="w-1/2 text-5xl">Lectio</div>
        <div class="w-1/2 text-xl mt-4">Welcome {{ navState.user }}</div>
      </div>
    </div>
    <router-view />
    <div class="py-8"></div>
  </div>
</template>

<script>
import { NavState } from './script/nav.js'

export default {
  name: 'App',

  data() {
    return {
      navState: new NavState()
    }
  },
}
</script>

<style>
@tailwind preflight;
@tailwind components;
@tailwind utilities;
</style>

<style>
  #app{
    text-align: center;
  }

  #nav{
    color: white;
    font-size: 3em;
    padding: 0.5em;
    margin-bottom: 1em;
  }

  @font-face {
    font-family: 'Dyslexie';
    src: url('/fonts/Dyslexie_Regular_149888.ttf');
  }

  div {
    font-family: 'Dyslexie';
  }
</style>