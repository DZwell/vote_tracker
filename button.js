$(function() {


   var myPics = ['images/battle_cats.jpeg', 'images/battle_cat2.jpeg', 'images/dentures_cat.jpeg', 'images/neck_tie_cat.jpeg', 'images/hoodie_cat.jpeg', 'images/llama.jpeg', 'images/pirhana_cat.jpeg', 'images/creepy_cat.jpeg', 'images/fat_cat.jpg', 'images/nerd_cat.gif', 'images/pippy_long_cat.jpg', 'images/sword_cat.jpeg', 'images/sylvester.jpeg'];
   //Array to store instances of images

   //Constructor for random images
   var BattleCats = (function cat(votes, state, name) {
    var objectArray = []
      catConstructor = function () {
        objectArray.push(this);
        this.votes = votes;
        this.state = state;
        this.name = name;
      };
    catConstructor.each = function (fn) {
      for (var i = 0; i < objectArray.length; i++) {
          fn.call(objectArray[i]);
          console.log(objectArray[i]);
        }
      }
      return catConstructor;
    }

    var playGame = function(img, )



    var cat1 = Math.floor(Math.random() * myPics.length);
    var cat2 = Math.floor(Math.random() * myPics.length);
    while(cat1 === cat2) {
      cat2 = Math.floor(Math.random() * myPics.length);
    }
       $('section#kitten1').prepend('<img src="' +myPics[cat1]+'">');
       $('section#kitten2').prepend('<img src="' +myPics[cat2]+'">');

       //for loop to instantiate instances of constructor functions

       $('button').on('click', function() {
        $(this)
       })

 });




