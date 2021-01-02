<template>
    <div id="welcome">
<div>
  <p class="chad center">
    CHAD<br /><span class="arabic">---- تشاد • الحروب تويوتا ----</span>
  </p>
</div>
<div>
  <p class="wars center">THE TOYOTA WARS</p>
</div>
<p class="center">
<img
  class="toyota"
  src="images/logo2.gif"
/>
</p>
<!--
<div>
  <div class="manta center">
  GAME ☆ RULEBOOK
  </div>
</div>-->

<p class="center">
<a href="/rulebook/" class="mybutton">
  Get Started →
</a>
</p>
</div>
</template>


<style scoped>
    
.chad {
  color: var(--ac) !important;
  font-size: 90pt;
  font-family: "Holtwood One SC", serif;
  line-height: 0.4em;
  margin-bottom: -0.2em;
  margin-top: 0.7em;
  /**background-color:rgb(100,70,0);**/
}
@media only screen and (max-device-width: 1000px) {
  .chad {
    color: var(--ac) !important;
    font-size: 65pt;
    font-family: "Holtwood One SC", serif;
    line-height: 0.4em;
    /**background-color:rgb(100,70,0);**/
  }
}
.center {
  text-align: center;
  margin-right:auto;
  margin-left:auto;
}
.wars {
  color: var(--ac) !important;
  font-family: "Teko";
  font-size: 61px;
  line-height: 0.5em;
  margin-top: 1em;
  margin-bottom: -0.5em;
}
@media only screen and (max-device-width: 1000px) {
  .wars {
    font-size: 44px;
    margin-top: 35px;
  }
}
.arabic {
  font-size: 0.3em;
  font-family: Cairo;
  color: var(--do);
  font-stretch: ultra-expanded;
}
.toyota {
  width: 410px;
  left: 50%;
  image-rendering: pixelated;
  z-index: 2;
  margin-top: -50px;
}
@media only screen and (max-device-width: 1000px) {
  .toyota {
  width: 290px;
  }
}

.mybutton {
  display: block;
  font-size: 1.2rem;
  color: var(--ac);
  border: 4px solid #ffb300;
  padding: 0.8rem 1.6rem;
  border-radius: 4px;
  transition: background-color 0.1s ease;
  box-sizing: border-box;
  margin-left:auto;
  margin-right:auto;
  margin-top: -150px;
  font-family: monospace;
  text-align:center;
  width: 435px;
  cursor: pointer;
}
@media only screen and (max-device-width: 1000px) {
  .mybutton {
    width: 320px;
    max-width: 95%;
    margin-top: -120px;
  }
}
</style>