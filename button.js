  (function() {
   var myPics = ['images/battle_cats.jpeg', 'images/battle_cat2.jpeg', 'images/dentures_cat.jpeg', 'images/neck_tie_cat.jpeg', 'images/hoodie_cat.jpeg', 'images/llama.jpeg', 'images/pirhana_cat.jpeg', 'images/creepy_cat.jpeg', 'images/fat_cat.jpg', 'images/nerd_cat.gif', 'images/pippy_long_cat.jpg', 'images/sword_cat.jpeg', 'images/sylvester.jpeg'];



   var catPick = function(array) {
    var cat1 = Math.floor(Math.random() * array.length);
    var cat2 = Math.floor(Math.random() * array.length);
    console.log(cat1, cat2);
    while(cat1 === cat2) {
      cat2 = Math.floor(Math.random() * array.length);
    }
    var img1 = document.createElement('img');
    var img2 = document.createElement('img');

    img1.src = array[cat1];
    img2.src = array[cat2];


    document.getElementById('kitten1').appendChild(img1);
    document.getElementById('kitten2').appendChild(img2);


    console.log(img1.src);
   }

   catPick(myPics);

})();
