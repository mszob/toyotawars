# Rulebook

<div class="fenetre" style="
  position: fixed !important;
  width: 100px; 
  height: 100px; 
  background-color: rgba(44,50,54,0.9); 
  border:none;
  cursor: pointer;
  hover: 101%;
  right: 3%;
  top: 9%;
  border: 20px solid rgba(44,50,54,0.9);
  border-radius: 20%;">
  <img id="image" src="img1.png" name="randimg" >
  <style>
    .fenetre {background-color: rgb(44,50,54)}
    #image {
      width: 100px;
    }
    #image:not(:active) {
      animation-name: example;
      animation-duration: 4s;
    }
    #image:hover {
      cursor:pointer;
    }
    @keyframes example {
      from {opacity:0;}
      to {opacity: 1;}
    }
  </style>
  <script>
    var images = [ 
      "https://i.ibb.co/Hpp9nFM/d1.png", 
      "https://i.ibb.co/XxwmjbW/d2.png",
      "https://i.ibb.co/KbxCMyW/d3.png",
      "https://i.ibb.co/tbppJVM/d4.png",
      "https://i.ibb.co/2jtdHnb/d5.png",
      "https://i.ibb.co/QQtWTQk/d6.png"];
    init();
    function random_image(images) {
      var random = randomize(images);
      while(images[random] === document.getElementById("image").src){
      random = randomize(images)
    }
    document.getElementById("image").src = images[random].toString();
    }
    function randomize(array){
      return Math.floor((Math.random() * (array.length)));
    }
    function init() {
      document.getElementById("image").addEventListener("click", function(){
      random_image(images);
      });
      random_image(images);
    }
  </script>
</div>