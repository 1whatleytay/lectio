<template>
<body>
  <!-- Landing page blocker -->
  <div class="landing_page_blocker">
    <div class="mx-auto">
      <h1 class="mx-auto" style="position:relative; color:white; top:0; margin-top:11%">Lectio</h1>
      <h2 class="mx-auto" style="position:relative; color:white; top:0; margin-top:1%">Reading Made Better</h2>
    </div>
    
    <router-link to="/hub">
		<div class="test2 mx-auto">
      <h1 style="color:white; font-size:30px; margin-top: 70px; border-radius:5px ">Log In</h1>
    </div>
    </router-link>
    
    <router-link to="/hub">
    <div class="test3 mx-auto">
      <h1 style="color:#07C9DD; font-size:30px; margin-top: 70px; border-radius:50px">Sign up</h1>
    </div>
    </router-link>
	</div>
  <div class="book">
  </div>

  <!--  -->
  <div class="information_view show mx-auto">
    <div class="part mx-auto">
      <h1 style="color: white; font-size:40px; margin-top:160px;" class="mx-auto my-auto">Innovative</h1>

      <div class="floating_box" style="">
        <p style="margin:20px; color:white; font-size: 25px;">Lectio uses voice recognition to analyse spoken text when reading literature to create statistical models of reading efficiency.</p>
      </div>
    </div>

    <div class="part mx-auto">
      <h1 style="color: white; font-size:40px; margin-top:160px;" class="mx-auto my-auto">Easy To Use</h1>
      <div class="floatl" style=" margin-top:-7.5%">
        <p style="margin:20px; color:white; font-size: 25px; margin-top:7.5%">Lectio allows instantaneous text-to-voice on pieces of text to help the user understand the pronounciation of words and create cognitive links.
        </p>
      </div>
    </div>

    <div class="part mx-auto">
      <h1 style="color: white; font-size:40px; margin-top:160px;" class="mx-auto my-auto">Integrated</h1>
      <div class="floating_box" style="">
        <p style=" color:white; font-size: 25px;">Lectio allows you to pick up any public domain book and read in comfort while Lectio listens to you and passively analyses the spoken words to determine potential areas of focus during future sessions. This data then gets linked to your account and you can practice them in the web app.</p>
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
  
.floating_box {
  position: absolute;
  padding: 1em;
  left: 1em;

  height: auto;
  width: 500px;

  box-shadow: 2.5px 5px 9px #888888;
  border-radius:1em;
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
    position:absolute;
		width: 15%;
		height: 170px;
		background: #07C9DD;
		margin-top: 15vh;
		margin-left: 25%;
	}
  	.test3{
    margin: 20px;
    position:absolute;
    margin-left: 60%;
		width: 15%;
		height: 170px;
		background: white;
		margin-top: 15vh;
		margin-right: 25%;
	}

  .landing_page_blocker {
  position: relative;

  width: auto;
  height: 100vh;
  top: calc(-100vh / 4);

  z-index: 90;

  background: url("/ui/wave.svg");
  background-repeat: no-repeat;

  background-size: 100%;
  overflow: hidden;
}
</style>
