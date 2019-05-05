<template>
  <div id="app">
    <div v-if="navState.state !== 'NoShow'">
      <div v-if="navState.state === 'Normal'" class="shadow text-4xl" :class="navState.color" id="nav">
       <span style="font-size:70px;"> Lectio</span><br> <span style="font-size:20px;">Reading Made Better</span>
      </div>
      <div v-if="navState.state === 'Comfy'" class="shadow flex" :class="navState.color" id="nav">
        <div class="w-1/2 text-4xl text-left pl-4">Lectio</div>
        <div class="w-1/2 text-xl mt-2 text-right pr-4">Welcome {{ navState.user }}</div>
      </div>
    </div>
    <router-view />
    <div class="py-8"></div>
  </div>
</template>

<script>
import { NavState } from './script/nav.js'

import axios from 'axios'

export default {
  name: 'App',

  data() {
    return {
      name: "",
      rank: -1,
      navState: new NavState(),
    }
  },

  mounted() {
    axios.get("http://142.1.5.223:1645/users/0").then(res => {
      this.name = res.data.name;
      this.rank = res.data.rank;
    })
  }
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
