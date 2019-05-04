<template>
  <Analytics :info="info"/>
</template>

<script>
import Analytics from '../components/Analytics.vue'

export default {
  name: 'Finished',

  components: { Analytics },
  props: [ 'info' ],

  mounted() {
    console.log(this.info)
  }
}
</script>