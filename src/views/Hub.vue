<template>
<div>
  <div class="" id="btn_box">
    <h1 style="font-size:4rem">
      Start
    </h1>
    <br>
    <br>
    <div class="mx-auto" id="start_btn">
      <img :src="`${publicPath}ui/play.svg`"></img>
    </div>
  </div>
  <br><br>

  <Analysis />
</div>
</template>

<script>
import Analysis from '@/components/Analytics.vue';

export default {
  components: {
    Analysis
  },
  data(){
    return {
      publicPath: process.env.BASE_URL
    }
  }
}
</script>

<style>
#btn_box {
  padding: 1.2em;
  border-radius: 2em;
}

#start_btn {

  color: #111;
  border-radius: 50%;

  width: 20vw;
  height: 20vw;
  overflow: hidden;
}

#start_btn:hover {}
</style>
