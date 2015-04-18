'use strict';

$(function() {

  function BattleCat(name, imgFile) {
    this.name = name;
    this.imgFile = imgFile;
    this.votes = 0;
  }

  var picIndex= []; //Array of two cats selected to battle
  var imgurCats = []; //Hold array of cats from imgur
  var myCats = []; //Array of cat objects generatd from imgurCats

  $.ajax({
    url: 'https://api.imgur.com/3/album/h1TKF.json',
    method: 'GET',
    headers: {
      'Authorization': 'Client-ID 120ecb89d2484a3'
    }
  })
  .done(function(res) {

    imgurCats = res.data.images; //Storing pics from imgur as an array
    imgurCats.forEach(function(cat) {
      myCats.push(new BattleCat(cat.id, cat.link));
    });
    picIndex =  preVoteRender();

  });

  function preVoteRender() {

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


  $('#vote1').on('click', function() {
    $('#kitten1'  ).append( '<h2>Winner winner chicken dinner</h2>' );
    myCats[picIndex[0]].votes++;
    $('.voteButton').hide();
    $('#next').show();
    console.log(myCats);
  });

   $('#vote2').on('click', function() {
    $('#kitten2'  ).append( '<h2>Nice Choice!</h2>' );
    myCats[picIndex[1]].votes++;
    $('.voteButton').hide();
    $('#next').show();
        console.log(myCats);

  });

   $('#next').on('click', function() {
    picIndex = preVoteRender();
   });
});
