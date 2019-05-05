<template>
<div>
  <div class="" id="btn_box">
    <h1 style="font-size:4rem">
      Start
    </h1>
    <br>
    <br>
    <div class="mx-auto" id="start_btn">
      <img src="/ui/play.svg"></img>
    </div>
  </div>
  <br><br>

  <Analysis :info="msg"/>
</div>
</template>

<script>
import Analysis from '@/components/Analytics.vue';
import axios from 'axios';

export default {
  components: {
    Analysis
  },
  data(){
    return{
      msg: {}
    }
  },
  mounted() {
    axios.get("/requests/analytics-1.json").then(e => {
      this.msg = e.data;
    })
  },

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
