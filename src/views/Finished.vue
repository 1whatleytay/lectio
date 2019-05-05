<template>
  <div>
    <Analytics v-if="info" :info="info"/>
    <router-link tag="a" to="/hub">Back</router-link>
  </div>
</template>

<script>
import axios from 'axios'

import Analytics from '../components/Analytics.vue'

export default {
  name: 'Finished',

  components: { Analytics },
  data() {
    return {
      info: null
    }
  },

  mounted() {
    axios.get('/requests/analytics-1.json').then((request) => {
      console.log(request.data)
      this.info = request.data
    })
  }
}
</script>