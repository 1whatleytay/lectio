<template>
  <div class="w-4/5 p-4 mx-auto rounded results border border-grey text-center">
    <div class="text-4xl mb-8">Analytics for: {{ info.user.name }}</div>
    <div class="flex flex-wrap mb-4 sm:mb-10">
      <div class="lg:w-1/3 sm:w-full">
        <canvas ref="pie" class="w-1/3"/>
      </div>
      <div class="lg:w-1/3 sm:w-full">
        <canvas ref="line" class="w-1/3"/>
      </div>
      <div class="lg:w-2/3 sm:w-full text-4xl pt-12">
        <span
          v-bind:class="{ 'text-yellow text-5xl': info.user.rank === 1, 'text-blue text-4xl': info.user.rank !== 1 }"
        >#{{ info.user.rank }}</span>
        <br>in the World
      </div>
    </div>
    <div class="w-full">
      <div class="text-4xl m-2">Words Studied</div>
      <div
        v-for="(word, id) in info.results.words"
        v-bind:key="id"
        v-bind:class="{ 'text-red': !word.state }"
      >{{ word.word }}</div>
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
      pieChart: null,
      lineChart:null
    }
  },

  // TODO: Add props instead of data fields

  mounted() {
    console.log(this.info)
    this.pieChart = new Chart(this.$refs['pie'].getContext('2d'), {
      type: 'pie',
      data: {
        labels: [ 'Word', 'Hello', 'sdfjkl', 'sfjl', 'ldjf' ],
        datasets: [
          {
            label: 'Results',
            data: [
              this.info.results.Word,
              this.info.results.Hello,
              this.info.results.sdfjkl,
              this.info.results.sfjl,
              this.info.results.ldjf
            ],
            backgroundColor: [
              'rgba(99, 255, 132, 0.2)',
              'rgba(235, 54, 54, 0.2)',
              'rgba(235, 54, 54, 0.2)',
              'rgba(235, 54, 54, 0.2)',
              'rgba(235, 54, 54, 0.2)',
              'rgba(235, 54, 54, 0.2)',
              'rgba(235, 54, 54, 0.2)',
              'rgba(235, 54, 54, 0.2)',
              'rgba(235, 54, 54, 0.2)',
              'rgba(235, 54, 54, 0.2)',
              'rgba(235, 54, 54, 0.2)',
            ],
          }
        ]
      }
    })
    this.lineChart = new Chart(this.$refs['line'].getContext('2d'), {
      type: 'line',
      data: {
            label: ['Session 1','Session 2','Session 2'],
            datasets: {
              data: [
                this.info.results.incorrects.sessions[0],
                this.info.results.incorrects.sessions[1],
                this.info.results.incorrects.sessions[2]
              ],
             backgroundColor: [
              'rgba(99, 255, 132, 0.2)',
              'rgba(99, 255, 132, 0.2)',
              'rgba(99, 255, 132, 0.2)',
            ]
            },
          },
    });
  }
}
</script>

<style>
.results {
  background-color: rgba(225, 225, 225, 0.2);
}
</style>