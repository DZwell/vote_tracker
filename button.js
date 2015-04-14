  $(function() {
   var myPics = ['images/battle_cats.jpeg', 'images/battle_cat2.jpeg', 'images/dentures_cat.jpeg', 'images/neck_tie_cat.jpeg', 'images/hoodie_cat.jpeg', 'images/llama.jpeg', 'images/pirhana_cat.jpeg', 'images/creepy_cat.jpeg', 'images/fat_cat.jpg', 'images/nerd_cat.gif', 'images/pippy_long_cat.jpg', 'images/sword_cat.jpeg', 'images/sylvester.jpeg'];



   // var catPick = function(array) {
    var cat1 = Math.floor(Math.random() * myPics.length);
    var cat2 = Math.floor(Math.random() * myPics.length);
    // console.log(cat1, cat2);
    while(cat1 === cat2) {
      cat2 = Math.floor(Math.random() * myPics.length);
    }
       $('section#kitten1').prepend('<img src="' +myPics[cat1]+'">');
       $('section#kitten2').prepend('<img src="' +myPics[cat2]+'">');

 });


