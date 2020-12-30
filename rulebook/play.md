# Play


  <div
      class="dice1"
    >
      <img
        id="image"
        src="https://i.ibb.co/3vrfSsT/d3.png"
        onclick="change();"
      />
      <style>
        .dice1, .dice2 {
          position: fixed;
          background-color: rgba(44, 50, 54, 0.8);
          cursor: pointer;
          border-radius: 15%;
          bottom:10px;
        }
        .dice1 {
          right: 10px;
        }
        .dice2 {
          right: 170px;   
        }
        #image,
        #image2 {
          width: 150px;
          height: 150px;
        }
        #image:hover,
        #image2:hover {
          cursor: pointer;
        }
        @media only screen and (max-device-width:1000px)  { 
          .dice1 {
            right:20px !important;
          }
          .dice2 {
            left:20px !important;
          }
          #image,
          #image2 {
            width: 150px;
            height: 150px;
            image-rendering: crisp-edges;
          }
         }
      </style>
      <script>
        function sleep(milliseconds) {
          const date = Date.now();
          let currentDate = null;
          do {
            currentDate = Date.now();
          } while (currentDate - date < milliseconds);
        }
        function change() {
          document.getElementById("image").src =
            "https://i.ibb.co/84NCLQF/dice-mr.gif";
          setTimeout(() => {
            random_image(images);
          }, 1200);
        }
        var images = [
          "https://i.ibb.co/PFGs32S/d1.png",
          "https://i.ibb.co/M7fW5cf/d2.png",
          "https://i.ibb.co/3vrfSsT/d3.png",
          "https://i.ibb.co/PCQ1jTJ/d4.png",
          "https://i.ibb.co/yB0N8qP/d5.png",
          "https://i.ibb.co/FnjctYm/d6.png"
        ];
        function random_image(images) {
          var random = randomize(images);
          while (images[random] === document.getElementById("image").src) {
            random = randomize(images);
          }
          document.getElementById("image").src = images[random].toString();
        }
        function randomize(array) {
          return Math.floor(Math.random() * array.length);
        }
      </script>
    </div>
    <div class="dice2">
      <img
        id="image2"
        src="https://i.ibb.co/3vrfSsT/d3.png"
        onclick="change2();"
      />
      <script>
        function change2() {
          document.getElementById("image2").src =
            "https://i.ibb.co/84NCLQF/dice-mr.gif";
          setTimeout(() => {
            random_image2(images);
          }, 1200);
        }
        function random_image2(images) {
          var random = randomize(images);
          while (images[random] === document.getElementById("image2").src) {
            random = randomize(images);
          }
          document.getElementById("image2").src = images[random].toString();
        }
      </script>
    </div>