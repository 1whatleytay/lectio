<template>
<body>
	<div class="test">
		<div class="test2"></div>
	</div>
  <div class="book">
  </div>
  <div class="show mx-auto">
    <div class="part mx-auto"></div>
    <div class="part mx-auto"></div>
    <div class="part mx-auto"></div>
    <div class="part mx-auto" style="background: #07C9DD">
      <h1 style="color: white; font-size:40px; margin-top:160px;" class="mx-auto my-auto">Join Now!</h1>
    </div>
  </div>
</body>
</template>
<style type="text/css">
  .part{
    border-color: #07C9DD;
    width:400px;
    height:400px;
    margin-top:15vh;
    background: white;
    border-style: solid;
    border-width: 3px;
    border-radius: 50%;
  }
  .show{
    padding-bottom: 10%;
    overflow: auto; 
    height:auto;
    background-image:url(/img/landing/line.svg);
    background-repeat: no-repeat;
    background-size:100%;
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
		background: url("/ui/wave.svg");
		width: auto;
		height: 100vh;
    background-repeat: no-repeat;
    background-size:100%;
    overflow: hidden;
    margin-top:-9.5em;
	}
	.test2{
		width: 35%;
		height: 35vh;
		background: black;
		margin-top: 30vh;
		margin-left: 32.5%;
	}
</style>