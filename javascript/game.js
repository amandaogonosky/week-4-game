console.log('working');
$(document).ready(function() {
  var counter = 0;
  var wins = 0;
  var losses = 0;
  var randomNumber;
  var crystalOne =0;
  var crystalTwo;
  var crystalThree;
  console.log(crystalThree)
  var crystalFour;
 
  function resetGame(){
    counter = 0;
    randomNumber = Math.floor(Math.random() * (120 - 19) + 19);
    crystalOne = Math.floor (Math.random() * (12-1) + 1);
    console.log(crystalOne)
     crystalTwo = Math.floor (Math.random() * (12-1) + 1);
     crystalThree = Math.floor (Math.random() * (12-1) + 1);
    console.log(crystalThree)
     crystalFour = Math.floor (Math.random() * (12-1) + 1);
   }

  resetGame();
$("#one").attr("dataCrystalvalue",crystalOne)
$("#two").attr("dataCrystalvalue",crystalTwo)
$("#three").attr("dataCrystalvalue",crystalThree)
$("#four").attr("dataCrystalvalue", crystalFour)

  $("#number-to-guess").text(randomNumber);
  
  $(".crystal-image").on("click", function() {
    var crystalValue = ($(this).attr("dataCrystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    console.log("click");
    
    alert("New score: " + counter);
    if (counter === randomNumber) {
      console.log("YOU WIN!")
      wins ++;
      resetGame();
    }
    else if (counter >= randomNumber) {
      losses++;
      alert("YOU LOSE!");
      resetGame();
    }
    $("#counter").text(counter);
    $("#wins").text(wins);
    $("#losses").text(losses);
    
    
  });
});