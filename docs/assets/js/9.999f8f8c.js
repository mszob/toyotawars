(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{362:function(n,e,i){"use strict";i.r(e);var t=i(42),a=Object(t.a)({},(function(){var n=this,e=n.$createElement,i=n._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[i("h1",{attrs:{id:"play"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#play"}},[n._v("#")]),n._v(" Play")]),n._v(" "),i("div",{staticClass:"dice1"},[i("img",{attrs:{id:"image",src:"https://i.ibb.co/3vrfSsT/d3.png",onclick:"change();"}}),n._v(" "),i("style",[n._v("\n        .dice1, .dice2 {\n          position: fixed;\n          background-color: rgba(44, 50, 54, 0.8);\n          cursor: pointer;\n          border-radius: 15%;\n          bottom:10px;\n        }\n        .dice1 {\n          right: 10px;\n        }\n        .dice2 {\n          right: 170px;   \n        }\n        #image,\n        #image2 {\n          width: 150px;\n          height: 150px;\n        }\n        #image:hover,\n        #image2:hover {\n          cursor: pointer;\n        }\n        @media only screen and (max-device-width:1000px)  { \n          .dice1 {\n            right:20px !important;\n          }\n          .dice2 {\n            left:20px !important;\n          }\n          #image,\n          #image2 {\n            width: 150px;\n            height: 150px;\n            image-rendering: crisp-edges;\n          }\n         }\n      ")]),n._v(" "),i("script",[n._v('\n        function sleep(milliseconds) {\n          const date = Date.now();\n          let currentDate = null;\n          do {\n            currentDate = Date.now();\n          } while (currentDate - date < milliseconds);\n        }\n        function change() {\n          document.getElementById("image").src =\n            "https://i.ibb.co/84NCLQF/dice-mr.gif";\n          setTimeout(() => {\n            random_image(images);\n          }, 1200);\n        }\n        var images = [\n          "https://i.ibb.co/PFGs32S/d1.png",\n          "https://i.ibb.co/M7fW5cf/d2.png",\n          "https://i.ibb.co/3vrfSsT/d3.png",\n          "https://i.ibb.co/PCQ1jTJ/d4.png",\n          "https://i.ibb.co/yB0N8qP/d5.png",\n          "https://i.ibb.co/FnjctYm/d6.png"\n        ];\n        function random_image(images) {\n          var random = randomize(images);\n          while (images[random] === document.getElementById("image").src) {\n            random = randomize(images);\n          }\n          document.getElementById("image").src = images[random].toString();\n        }\n        function randomize(array) {\n          return Math.floor(Math.random() * array.length);\n        }\n      ')])]),n._v(" "),i("div",{staticClass:"dice2"},[i("img",{attrs:{id:"image2",src:"https://i.ibb.co/3vrfSsT/d3.png",onclick:"change2();"}}),n._v(" "),i("script",[n._v('\n        function change2() {\n          document.getElementById("image2").src =\n            "https://i.ibb.co/84NCLQF/dice-mr.gif";\n          setTimeout(() => {\n            random_image2(images);\n          }, 1200);\n        }\n        function random_image2(images) {\n          var random = randomize(images);\n          while (images[random] === document.getElementById("image2").src) {\n            random = randomize(images);\n          }\n          document.getElementById("image2").src = images[random].toString();\n        }\n      ')])])])}),[],!1,null,null,null);e.default=a.exports}}]);