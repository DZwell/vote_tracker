$(function() {
  //Create array to store images
  var myPics = ['images/battle_cats.jpeg', 'images/battle_cat2.jpeg', 'images/dentures_cat.jpeg', 'images/neck_tie_cat.jpeg', 'images/hoodie_cat.jpeg', 'images/llama.jpeg', 'images/pirhana_cat.jpeg', 'images/creepy_cat.jpeg', 'images/fat_cat.jpg', 'images/nerd_cat.gif', 'images/pippy_long_cat.jpg', 'images/sword_cat.jpeg', 'images/sylvester.jpeg'];
  //Create BattleCat function with (name, imgFile)
  function BattleCat(name, imgFile) {
    this.name = name;
    this.imgFile = imgFile;
  }
  //Create instances of BattleCat
  var rufus = new BattleCat('Rufus', 'image/battle_cat2.jpeg');
  var theJackal = new BattleCat('The Jackal', 'image/creepy_cat.jpeg');
  var bruce = new BattleCat('Bruce', 'image/dentures_cat.jpeg');
  var clancy = new BattleCat('Clancy', 'image/fat_cat.jpg');
  var rosco = new BattleCat('Rosco', 'image/hoodie_cat.jpeg');
  var lance = new BattleCat('Lance', 'image/llama.jpeg');
  var joker = new BattleCat('Joker', 'image/neck_tie_cat.jpeg');
  var robert = new BattleCat('Robert', 'image/nerd_cat.gif');
  var pippy = new BattleCat('Pippy Long Cat', 'image/pippy_long_cat.jpg');
  var maxamillion = new BattleCat('Maxamillion', 'image/pirhana_cat.jpeg');
  var rod = new BattleCat('Rod', 'image/praying_cat.jpeg');
  var mrBoots = new BattleCat('Mr. Boots', 'image/sword_cat.jpeg');
  var sylvester = new BattleCat('Sylvester', 'image/sylvester.jpeg');
  //Store instances in array
  var myCats = [rufus, theJackal, bruce, clancy, rosco, lance, joker, robert, pippy, maxamillion, rod, mrBoots, sylvester ];
    console.log(myCats[0]);
  //Display to page
    //Create render function for pre-vote/page-load state

    //Create render function for post-vote state
  //Create function to randomly pull from instances array
    //Prevent display of same cat from appearing
  function pullPics () {
    var rndmPic1 = _.sample(myCats);
    var rndmPic2 = _.sample(myCats);
  };
  $('section#kitten1').prepend('<img src="' +myPics[cat1]+'">');
  $('section#kitten2').prepend('<img src="' +myPics[cat2]+'">');
  //Get buttons working
  //Track votes of cats
  //Create chart to display stats
  //Create refresh button to reset

});












 //  //Constructor for random images
 //  var BattleCats = (function cat() {
 //    catConstructor = function () {
 //      objectArray.push(this);
 //      this.votes = votes;
 //      this.state = state;
 //      this.name = name;
 //    };

 //    catConstructor.each = function (fn) {
 //      for (var i = 0; i < objectArray.length; i++) {
 //        fn.call(objectArray[i]);
 //        console.log(objectArray[i]);
 //      };
 //    };
 //    return catConstructor;
 //  };

 //    //var playGame = function(img, )



 //    var cat1 = Math.floor(Math.random() * myPics.length);
 //    var cat2 = Math.floor(Math.random() * myPics.length);
 //    while(cat1 === cat2) {
 //      cat2 = Math.floor(Math.random() * myPics.length);
 //    }


 //       //for loop to instantiate instances of constructor functions

 //       $('button').on('click', function() {
 //        $(this)
 //       })

 // });




