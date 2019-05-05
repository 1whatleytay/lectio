<template>
  <div id="app">
    <div v-if="navState.state !== 'NoShow'">
      <div v-if="navState.state === 'Normal'" class="shadow text-4xl tts" :class="navState.color" id="nav">
        Lectio
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
import {requestSpeak} from './script/text_to_speech.js'

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
    });

    document.querySelectorAll(".tts").forEach(el => {
  el.onmouseenter = mouseEvent => {
    let elem = document.elementFromPoint(mouseEvent.x, mouseEvent.y);
    let data = {
      elem,
      x: mouseEvent.x,
      y: mouseEvent.y,
    };

    // After a certain amount of time check if the current hovered element is the same as the previously hovered element
    // if so, do the speech
    setTimeout(() => {
      console.log("mouseEvent");
      let hoveringElement = document.elementFromPoint(mousePosX, mousePosY);
      if (hoveringElement == data.elem) {
        // debugger;
        requestSpeak(elem.innerText, event => {
          elem.classList.remove("enabled");
        })
        elem.classList.add("enabled");
      }
    }, 1000);
  };
});

window.mousePosX = -1;
window.mousePosY = -1;

window.onmousemove = mouseEvent => {
  window.mousePosX = mouseEvent.x;
  window.mousePosY = mouseEvent.y;
};
    // debugger;
  },
  beforeMount() {
  },
}

// window.onload =
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
