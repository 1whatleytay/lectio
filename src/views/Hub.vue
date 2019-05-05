<template>
<div>
  <div class="text-center">
    <router-link :to="needsPlacement() ? '/placement' : '/lesson'">
      <button class="play-button w-64 h-64 rounded-full"
        v-bind:class="{ 'place-button': needsPlacement() }"></button>
    </router-link>
  </div>
  <br><br>

  <Analysis :user="msg"/>
</div>
</template>

<script>
import Analysis from '../components/Analytics.vue';
import axios from 'axios';

import { getState } from '../script/nav.js'

export default {
  components: {
    Analysis
  },
  data() {
    return {
      msg: {}
    }
  },
  mounted() {
    getState().state = 'Comfy'

    axios.get("http://142.1.5.223:1645/users/112").then(res => {
      this.msg = res.data;
    })
  },

  methods: {
    needsPlacement() {
      return this.msg.sessions.length === 0
    }
  }
}
</script>

<style>
#start_btn {

  color: #111;
  border-radius: 50%;

  width: 20vw;
  height: 20vw;
  overflow: hidden;
}

.play-button {
  background-image: url('/ui/play.svg');
  background-size: cover;
}

.place-button {
  background-image: url('/ui/place.svg');
  background-size: cover;
}
</style>
