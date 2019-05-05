<template>
  <div class="w-4/5 p-4 mx-auto rounded results border border-grey text-center">
    <div class="text-4xl mb-8">Analytics for {{ user.name }}</div>
    <div class="flex flex-wrap mb-4 sm:mb-10">
      <div class="w-1/2"> <canvas ref="pie"/> </div>
      <div class="w-1/2"> <canvas ref="line"/> </div>
        
      <div class="text-5xl pt-12">
        #{{ user.rank }} in the World
      </div>
    </div>
    <div v-if="user.sessions" class="w-full">
      <div class="text-4xl m-2 w-full">Words Practiced</div>
      <div class="flex">
        <div class="w-1/2">
          <div v-for="(word, id) in user.sessions[user.sessions.length - 1].correct"
            v-bind:key="id">{{ word }}</div>
        </div>
        <div class="w-1/2 text-red">
          <div v-for="(word, id) in user.sessions[user.sessions.length - 1].incorrect"
            v-bind:key="id" class="w-1/2">{{ word }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Chart from 'chart.js'

export default {
  name: 'Analytics',

  props: [ 'user' ],
  watch: {
    user() {
      this.pieChart = new Chart(this.$refs['pie'].getContext('2d'), {
        type: 'pie',
        data: {
          labels: [ 'Correct', 'Incorrect' ],
          datasets: [
            {
              label: 'Results',
              data: [
                this.user.sessions[0].correct.length,
                this.user.sessions[0].incorrect.length
              ],
              backgroundColor: [
                'rgba(99, 255, 132, 0.2)',
                'rgba(235, 54, 54, 0.2)',
              ],
            }
          ]
        }
      });

      // The line chart over time
      this.lineChart = new Chart(this.$refs['line'].getContext('2d'), {
        type: 'line',
        data: {
          labels: this.user.sessions.map((e, i) => `Session ${i + 1}`),
          datasets: [
            {
              label: 'Session',
              data: this.user.sessions.map(e => e.incorrect.length),
              backgroundColor: [
                'rgba(99, 255, 132, 0.2)',
                'rgba(99, 255, 132, 0.2)',
                'rgba(99, 255, 132, 0.2)',
              ]
          }],
        },
        options: {
          scales: {
            yAxes: [
              {
                display: true,
                ticks: { beginAtZero: true }
              }
            ]
          }
        }
      });
    }
  },

  data() {
    return {
      pieChart: null,
      lineChart: null,
    }
  },
}
</script>

<style>
.results {
  background-color: rgba(225, 225, 225, 0.2);
}
</style>
