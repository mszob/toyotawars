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
  font-size: 118px;
  font-family: "Holtwood One SC", serif;
  margin-top: 0px;
  margin-bottom: 0px;
  line-height: 45px;
  /**background-color:rgb(100,70,0);**/
}
@media only screen and (max-device-width: 1000px) {
  .chad {
    font-size: 86px;
    line-height: 35px;
    /**background-color:rgb(100,70,0);**/
  }
}
.center {
  text-align: center;
  margin-right:auto;
  margin-left:auto;
  margin-top: 0px !important;
  margin-bottom: 0px;
}
.wars {
  color: var(--ac) !important;
  font-family: "Teko";
  font-size: 61px;
  margin-top: 0px;
  line-height: 75px;
}
@media only screen and (max-device-width: 1000px) {
  .wars {
    font-size: 44px;
  }
}
.arabic {
  font-size: 35px;
  font-family: Cairo;
  color: var(--do);
}
@media only screen and (max-device-width: 1000px) {
  .arabic {
    font-size: 25px;
    line-height: 20px;
  }
}
.toyota {
  width: 410px;
  image-rendering: pixelated;
  margin-top: -80px;
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
    margin-top: -105px;
  }
}
</style>