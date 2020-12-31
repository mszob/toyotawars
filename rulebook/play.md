# Play

## Overview of Sequence of Play


The sequenece of play for Operation Stingray can be summarized with the following hierarchy.

```
     Tactical Phase 1...
     |_ Impulse 1
     |  |_ Government Segment
     |  |  |_ Movement
     |  |  |_ Battle
     |  |_ Rebel Segment
     |     |_ Movement
     |     |_ Battle
     |_ Impulse2
     |  |_ Same as Impulse 1
     |_ Impulse3
        |_ Same as Impulse 1

     Tactical Phase 2...
```

### Tactical Phases

At the broadest level, the game plays out as a sequence of Tactical Phases. A Tactical Phase is a phase of the game which is characterized by repeated movement and battle between players. Fundamental conditions and rules may change between Tactical Phases. For example, the first Tactical Phase of Opération Manta happens during rainy season; wells are more available to units in the desert, but marshes are more troublesome to navigate in the savanna. The second Tactical Phase, on the other hand, happens during the dry season. 

### Impulses 

Each Tactical Phase is split up into three Impulses. An Impulse is the basic "round" for Toyota Wars, during which each player plays one turn. We might say, then, that each Tactical Phase is three rounds.

### Segments

During each Impuse, the government players plays first, and the rebel player plays second. Each player's turn is called a Segment. For the government, the friendly segment is the segments during which the government plays; for the rebel player, it is the segment during which the rebel player plays.

### Movement and Battle Phases

### Diagram

Below is map of the sequence of play which can be used for reference during the game. More than just the basic hierarchy of the sequence of play, this chart helps to visualize what events happen just before and after the different phases of the game. For example, after each Impulse, and before the next Impulse begins, units not stationed on a water supply are eliminated.

![image](/images/diagram.png)

## 1.0 Guerilla Sanctuary Adjustment

When playing the first round, go straight to [Movement and Battle](#3-0-impulse-movement-and-battle)

All guerilla units in the "New Arrivals" section are moved into the main portion of each Sanctuary box, where they are free to re-enter the hex grid



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