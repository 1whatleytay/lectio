<template>
<div>
  <div class="text-center">
    <router-link to="/lesson">
      <button class="play-button w-64 h-64 rounded-full"></button>
    </router-link>
  </div>
  <br><br>

  <Analysis :info="msg"/>
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
    return{
      msg: { }
    }
  },
  mounted() {
    getState().state = 'Comfy'

    axios.get("/requests/analytics-1.json").then(e => {
      this.msg = e.data;
    })
  },

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
</style>
