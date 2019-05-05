<template>
<body>
	<div class="test">
    <div class="mx-auto">
    <h1 class="mx-auto" style="position:relative; color:white; top:0; margin-top:11%">Lectio</h1>
    <h2 class="mx-auto" style="position:relative; color:white; top:0; margin-top:1%">Reading Made Better</h2>
    </div>
		<div class="test2"></div>
	</div>
  <div class="book">
  </div>
  <div class="show mx-auto">
    <div class="part mx-auto">
      <h1 style="color: white; font-size:40px; margin-top:160px;" class="mx-auto my-auto">Innovative</h1>
      <div class="float" style="">
        <p style="margin:20px; color:white; font-size: 25px;">Lectio uses innovaive voice recognition to see if the words you are reading match up with those on the screen. During practice it breaks down the word showing the user what sounds they are messing up on consistantly.</p>
      </div>
    </div>
    <div class="part mx-auto">
      <h1 style="color: white; font-size:40px; margin-top:160px;" class="mx-auto my-auto">Easy To Use</h1>
      <div class="floatl" style=" margin-top:-7.5%">
        <p style="margin:20px; color:white; font-size: 25px; margin-top:7.5%">Lectio allows you to hover over words at any time to help those who have difficulty navigate the website. Along with that it allows one to preview words and find out how to pronouce them during the learning phase!
        </p>
      </div>
    </div>
    <div class="part mx-auto">
      <h1 style="color: white; font-size:40px; margin-top:160px;" class="mx-auto my-auto">Integrated</h1>
      <div class="float" style="">
        <p style="margin:20px; color:white; font-size: 25px;">Now take the Lectio experience to the living room, with the new Alexa Skill. It allows you to pick up any book of your own or from our collection of free public domain books, and read from teh comfort of the couch, whcile Lectio listens to you and logs words you've gotten wronge. These words then get linked to your account and you can practice them in the web app</p>
      </div>
    </div>
    <router-link to="/hub">
    <div class="part mx-auto">
      <h1 style="color: white; font-size:40px; margin-top:160px;" class="mx-auto my-auto">Join Now!</h1>
    </div>
    </router-link>
  </div>
</body>
</template>
<style type="text/css">
  .float{
    box-shadow: 2.5px 5px 9px #888888;
    margin-left:-30%;
    margin-top: -300px;
    position: absolute;
    height:auto;
    width:500px;
    border-radius: 5%;
    background-color: #07C9DD;
  }
    .floatl{
      box-shadow: 2.5px 5px 9px #888888;
      margin-bottom: 25px;
      margin-left:30%;
      position: absolute;
      height:300px;
      width:500px;
      border-radius:  5%;
      background-color: #07C9DD;
  }
  .part{
    border-color: #07C9DD;
    width:400px;
    height:400px;
    margin-top:15vh;
    background: white;
    border-style: solid;
    border-width: 3px;
    border-radius: 50%;
    background: #07C9DD
  }
  .show{
    padding-bottom: 10%;
    overflow: auto; 
    height:auto;
    background-image:url(/img/landing/line.svg);
    background-repeat: no-repeat;
    background-size:100%;
    margin-top:15vh
  }
  .book{
    position: absolute;
    top:0;
    z-index: -5;
    height:100%;
    width:100%;
    background-image: url(/img/landing/book-svg.svg);
    background-size: cover; 
  }
	.test{
    position: relative;
		background: url("/ui/wave.svg");
		width: auto;
		height: 100vh;
    background-repeat: no-repeat;
    background-size:100%;
    overflow: hidden;
    margin-top:-17em;
    z-index: 90;
	}
	.test2{
		width: 35%;
		height: 35vh;
		background: black;
		margin-top: 15vh;
		margin-left: 32.5%;
	}
</style>