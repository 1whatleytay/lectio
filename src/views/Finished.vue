<template>
  <div>
    <Analytics v-if="user" :user="user"/>
    <router-link tag="a" to="/hub">
      <button class="bg-lectio rounded w-16 h-16 mt-8 text-white back"></button>
    </router-link>
  </div>
</template>

<script>
import axios from 'axios'
import { getState } from '../script/nav.js'

import Analytics from '../components/Analytics.vue'

export default {
  name: 'Finished',

  components: { Analytics },
  data() {
    return {
      user: { }
    }
  },

  mounted() {
    axios.get(`${getState().api}/users/${getState().userId}`).then((request) => {
      this.user = request.data
      getState().user = this.user.name
    })
  }
}
</script>

<style>
.back {
  background-image: url('/ui/left.svg');
  background-size: cover;
}
</style>