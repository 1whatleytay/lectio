<template>
  <div class="w-4/5 p-4 mx-auto rounded results border border-grey text-center">
    <div class="text-5xl mb-8">Analytics for: {{ info.user.name }}</div>
    <div class="flex flex-wrap mb-4 sm:mb-10">
      <div class="lg:w-1/3 sm:w-full">
        <canvas ref="pie" class="w-1/3"/>
      </div>
      <div class="lg:w-2/3 sm:w-full text-5xl pt-12">
        #{{ info.user.rank }} in the World
      </div>
    </div>
    <div class="w-full">
      <div class="text-4xl m-2"> Words Studied </div>
      <div v-for="(word, id) in info.results.words"
        v-bind:key="id" v-bind:class="{ 'text-red': !word.state }">{{ word.word }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Chart from 'chart.js'

export default {
  name: 'Analytics',

  props: [ 'info' ],

  data() {
    return {
      pieChart: null
    }
  },

  // TODO: Add props instead of data fields

  mounted() {
    this.pieChart = new Chart(this.$refs['pie'].getContext('2d'), {
      type: 'pie',
      data: {
        labels: [ 'Correct', 'Incorrect' ],
        datasets: [
          {
            label: 'Results',
            data: [
              this.info.results.correct,
              this.info.results.total - this.info.results.correct
            ],
            backgroundColor: [
              'rgba(99, 255, 132, 0.2)',
              'rgba(235, 54, 54, 0.2)',
            ],
          }
        ]
      }
    })
  }
}
</script>

<style>
.results {
  background-color: rgba(225, 225, 225, 0.2);
}
</style>