(function() {
 var myPics = [battle_cat.jpeg, battle_cat2.jpeg, dentures_cat.jpeg, neck_tie_cat.jpeg, hoodie_cat.jpeg, llama.jpeg, pirhana_cat.jpeg, creepy_cat.jpeg];

  //array with cat pics
  //new function that will pic a random cat photo from the pic_array, 2 parameters are the array and the folder
  var catPicker = function(imgAry, path) {
    path = path || 'images'
    var number = Math.floor(Math.random() * myPics.length);
    var img = imgAry[number];
    var imgTag = '<img src=" + path + img>'
    return(imgTag);
  };
      //this is the folder in my vote_tracker directory which contains the cute cat pics

      //this new variable contains a randomly generate variable which is directly correlated to a pictrure in the array

      //this selects a picture with the newly generated 'num'

      //created an html string which contains the file path to a random cat pic

      //ends function, fires whats in parentheses







})
