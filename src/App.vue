<template>
  <div id="app">
    <div class="bg-lectio shadow" id="nav">
      Lectio
    </div>
    <router-view />
  </div>
</template>

<style>
@tailwind preflight;
@tailwind components;
@tailwind utilities;
</style>
<style>
  #app{
    text-align: center;
  }

  #nav{
    color: white;
    font-size: 3em;
    padding: 0.5em;
    margin-bottom: 1em;
  }

</style>