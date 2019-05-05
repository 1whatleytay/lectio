<template>

<div class="w-4/5 p-4 mx-auto rounded results border border-grey text-center">
  <div class="text-4xl mb-8">Analytics for: {{ user.name }}</div>
  <div class="flex flex-wrap mb-4 sm:mb-10">
    <div class="w-1/2"> <canvas ref="pie"/> </div>
    <div class="w-1/2"> <canvas ref="line"/> </div>
      
    <div class="text-5xl pt-12">
      #{{ user.rank }} in the World
    </div>
    </div>
    <div class="w-full">
      <div class="text-4xl m-2"> Words Studied </div>
      <div v-for="(word, id) in user.sessions.flatMap(s => s.correct)" v-bind:key="id">{{ word }}</div>
      <div v-for="(word, id) in user.sessions.flatMap(s => s.incorrect)" v-bind:key="id" class="text-red">{{ word }}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Chart from 'chart.js'

export default {
  name: 'Analytics',

  props: [ 'user' ],

  data() {
    return {
      pieChart: null,
      lineChart: null
    }
  },

  // TODO: Add props instead of data fields

  mounted() {
    console.log(this.user)

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
      options:{
        scales:{
          yAxes:[{
            display: true,
            ticks:{
              beginAtZero:true
            }
          }]
        }
      }
    });
  }
}
</script>

<style>
.results {
  background-color: rgba(225, 225, 225, 0.2);
}
</style>
