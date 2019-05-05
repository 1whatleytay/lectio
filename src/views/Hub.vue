<template>
<div>
  <div class="text-center">
    <router-link :to="needsPlacement() ? '/placement' : '/lesson'">
      <button class="play-button w-64 h-64 rounded-full"
        v-bind:class="{ 'place-button': needsPlacement() }"></button>
    </router-link>
  </div>
  <br><br>

  <div v-if="needsPlacement()" class="text-xl">
    Start your placements.
  </div>
  <Analytics v-if="!needsPlacement()" :user="user"/>
</div>
</template>

<script>
import Analytics from '../components/Analytics.vue';
import axios from 'axios';

import { getState } from '../script/nav.js'

export default {
  name: 'Hub',

  components: { Analytics },

  data() {
    return {
      user: { }
    }
  },
  mounted() {
    getState().state = 'Comfy'

    axios.get(`${getState().api}/users/${getState().userId}`).then((request) => {
      this.user = request.data
      getState().user = this.user.name
    })
  },

  methods: {
    needsPlacement() {
      if (!this.user.sessions) {
        return false
      }
      return this.user.sessions.length === 0
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
