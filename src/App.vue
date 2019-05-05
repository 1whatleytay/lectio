<template>
  <div id="app">
  <div class="bg-lectio" id="nav">
      <p class="text-left">
        Lectio
        <span class="float-right text-2xl">
          {{ name }}
          <br>
          thing
        </span>
      </p>
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

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: "",
      rank: -1,
    }
  },
  mounted() {
    axios.get("http://142.1.5.223:1645/users/0").then(res => {
      this.name = res.data.name;
      this.rank = res.data.rank;
    })
  },
}
</script>

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