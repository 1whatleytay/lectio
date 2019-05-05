<template>
  <div class="w-full h-8 flex my-4">
    <div :class="color" class="h-full" v-bind:style="{ width: (current / max * 100) + '%' }"></div>
    <div class="bg-grey h-full" v-bind:style="{ width: ((1 - current / max) * 100) + '%' }"></div>
  </div>
</template>

<script>
export default {
  name: 'Loading',

  props: [ 'current', 'max', 'color' ],
}
</script>