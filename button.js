'use strict';

$(function() {

  function BattleCat(name, imgFile) {
    this.name = name;
    this.imgFile = imgFile;
    this.votes = 0;
  }

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
  var myCats = [rufus, theJackal, bruce, clancy, rosco, lance, joker, robert, pippy, maxamillion, rod, mrBoots, sylvester ];

  function preVoteRender () {
    var rndmPic1 = _.random(0, myCats.length - 1);
    var rndmPic2 = _.random(0, myCats.length - 1);

    while (rndmPic1 === rndmPic2) {
      rndmPic2 = _.random(0, myCats.length - 1);
    }
    $('section#kitten1').html('<img src="' + myCats[rndmPic1].imgFile + '">');
    $('section#kitten2').html('<img src="' + myCats[rndmPic2].imgFile + '">');
    $('#next').hide();
    $('.voteButton').show();

    return [rndmPic1, rndmPic2]
  };

  var picIndex =  preVoteRender();

  $('#vote1').on('click', function() {
    $('#kitten1'  ).append( '<h2>Winner winner chicken dinner</h2>' );
    myCats[picIndex[0]].votes++;
    $('.voteButton').hide();
    $('#next').show();
  });

   $('#vote2').on('click', function() {
    $('#kitten2'  ).append( '<h2>Nice Choice!</h2>' );
    myCats[picIndex[1]].votes++;
    $('.voteButton').hide();
    $('#next').show();
  });

   $('#next').on('click', function() {
    preVoteRender();
   });
});
