<template>
  <Analytics v-if="info" :info="info"/>
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