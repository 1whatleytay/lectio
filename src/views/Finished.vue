<template>
  <div>
    <Analytics v-if="user" :user="user"/>
    <router-link tag="a" to="/hub">Back</router-link>
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
    axios.get(`http://142.1.5.223:1645/users/${getState().userId}`).then((request) => {
      this.user = request.data
      getState().user = this.user.name
    })
  }
}
</script>