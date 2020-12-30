# Terms and Definitions

<div class="fenetre" style="
  position: fixed !important;
  width: 150px; 
  height: 150px; 
  border:none;
  cursor: pointer;
  hover: 101%;
  right: 3%;
  top: 9%;
  border: 20px solid rgb(44,50,54);
  border-radius:10%;">
  <img id="image" src="https://i.ibb.co/VBPqRsX/d3.png" onclick="change();">    
      <style>
    .fenetre {background-color: rgb(44,50,54)}
    #image {
      width: 100px;
    }
    #image:hover {
      cursor:pointer;
    }
  </style>
  <script>
var images = [ 
      "https://i.ibb.co/64sZzr4/d1.png", 
      "https://i.ibb.co/7GsbLdH/d2.png",
      "https://i.ibb.co/VBPqRsX/d3.png",
      "https://i.ibb.co/mtSW8Rh/d4.png",
      "https://i.ibb.co/rxGgW99/d5.png",
      "https://i.ibb.co/LYrPrkJ/d6.png"];
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
    }
var image_tracker = 'orange';
function change() {
  var image = document.getElementById('image');
  if(image_tracker=='orange'){
    image.src='https://i.ibb.co/hKh068c/ezgif-6-63edae72e4c2.gif';
    image_tracker='blue';
    /*image.style["margin-left"] = "-10px";
    image.style["margin-top"] = "-10px";*/
  }
  else {
    random_image(images);
    image_tracker='orange';
    image.style["margin-top"] = "0px";
  }
}  
  </script>
</div>