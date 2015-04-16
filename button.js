'use strict';

$(function() {
  //Create array to store images
  var myPics = ['images/battle_cat2.jpeg', 'images/creepy_cat.jpeg', 'images/dentures_cat.jpeg', 'images/neck_tie_cat.jpeg', 'images/hoodie_cat.jpeg', 'images/llama.jpeg', 'images/pirhana_cat.jpeg', 'images/fat_cat.jpg', 'images/nerd_cat.gif', 'images/pippy_long_cat.jpg', 'images/sword_cat.jpeg', 'images/sylvester.jpeg'];
  //Create BattleCat function with (name, imgFile)
  function BattleCat(name, imgFile, votes) {
    this.name = name;
    this.imgFile = imgFile;
    this.votes = 0;
  }
  //Create instances of BattleCat
  var rufus = new BattleCat('Rufus', 'images/battle_cat2.jpeg');
  var theJackal = new BattleCat('The Jackal', 'images/creepy_cat.jpeg');
  var bruce = new BattleCat('Bruce', 'images/dentures_cat.jpeg');
  var clancy = new BattleCat('Clancy', 'images/fat_cat.jpg');
  var rosco = new BattleCat('Rosco', 'images/hoodie_cat.jpeg');
  var lance = new BattleCat('Lance', 'images/llama.jpeg');
  var joker = new BattleCat('Joker', 'images/neck_tie_cat.jpeg');
  var robert = new BattleCat('Robert', 'images/nerd_cat.gif');
  var pippy = new BattleCat('Pippy Long Cat', 'images/pippy_long_cat.jpg');
  var maxamillion = new BattleCat('Maxamillion', 'images/pirhana_cat.jpeg');
  var rod = new BattleCat('Rod', 'images/praying_cat.jpeg');
  var mrBoots = new BattleCat('Mr. Boots', 'images/sword_cat.jpeg');
  var sylvester = new BattleCat('Sylvester', 'images/sylvester.jpeg');
  //Store instances in array
  var myCats = [rufus, theJackal, bruce, clancy, rosco, lance, joker, robert, pippy, maxamillion, rod, mrBoots, sylvester ];
  //Display to page
    //Create render function for pre-vote/page-load state
    //Prevent display of same cat from appearing
  function preVoteRender () {
    var rndmPic1 = _.sample(myCats);
    var rndmPic2 = _.sample(myCats);

    if (rndmPic1 === rndmPic2) {
      rndmPic2 = _.sample(myCats);
    };
    $('section#kitten1').prepend('<img src="' + rndmPic1.imgFile + '">');
    $('section#kitten2').prepend('<img src="' + rndmPic2.imgFile + '">');
  };

  preVoteRender();
   //Get buttons working
  $('#vote1').on('click' function() {
    console.log('hi!!!');
    $( '<h2>Winner winner chicken dinner</h2>' ).append( '#kitten1' );
    rndmPic1.votes++;
    console.log(rndmPic1.votes);
  });

  $('#vote2').on('click' function() {
    $('<h2>Nice Choice!</h2>').append('#kitten2');
    rndmPic2.votes++;
  })
    //Add event listener to let user interact with page
    //Create post-vote function
      //No randomizer
      //Highlite pic that was voted for
      //Update chart
      //Add button to take back to pre-vote state
});
