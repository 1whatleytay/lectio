<template>
<body>
  <!-- Landing page blocker -->
  <div class="landing_page_blocker">
    <div class="mx-auto">
      <h1 class="mx-auto" style="position:relative; color:white; top:0; margin-top:11%">Lectio</h1>
      <h2 class="mx-auto" style="position:relative; color:white; top:0; margin-top:1%">Reading Made Better</h2>
    </div>
    <!-- Main intro box -->
    <div class="test2"></div>
  </div>

  <!-- book background -->
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
        <p style=" color:white; font-size: 25px;">Lectio allows you to pick up any public domain book and read in comfort while Lectio listens to you and passively analyses the spoken words to determine potential areas of focus during future sessions. This data then get linked to your account and you can practice them in the web app.</p>
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

<style>

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

.floatl {
  position: absolute;
  padding: 1em;

  height: 300px;
  width: 500px;

  right: 1em;

  border-radius: 1em;
  background-color: #07C9DD;
  box-shadow: 2.5px 5px 9px #888888;
}

.part {
  border-color: #07C9DD;
  width: 400px;
  height: 400px;
  margin-top: 15vh;
  background: white;
  border-style: solid;
  border-width: 3px;
  border-radius: 50%;
  background: #07C9DD
}

.show {
  padding-bottom: 10%;
  overflow: auto;
  height: auto;
  background-image: url(/img/landing/line.svg);
  background-repeat: no-repeat;
  background-size: 100%;
  margin-top: 15vh
}

.book {
  position: absolute;
  top: 0;
  z-index: -5;
  height: 100%;
  width: 100%;
  background-image: url(/img/landing/book-svg.svg);
  background-size: cover;
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

.test2 {
  width: 35%;
  height: 35vh;
  background: white;
  filter:blur(250px);
  margin-top: 15vh;
  margin-left: 32.5%;
}
</style>
