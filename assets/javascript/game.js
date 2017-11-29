

var blueValue = 0;
var purpleValue = 0;
var yellowValue = 0;
var greyValue = 0;

var targetScore = 0;
var currentScore = 0;



  function startGame() {
    //DONE: randomly pick a number between 19 and 120
    //      display that number in the div with id "targetScore"
    //      generate 4 random numbers and assign them to 4 different variables (blue, purple, yellow, grey)
    targetScore = Math.floor(Math.random()*(120-19+1)+19);
    console.log(targetScore);
    $("#targetScore").text(targetScore);

    blueValue = Math.floor(Math.random()*(12-1+1)+1);
    console.log("blue: " + blueValue);
    purpleValue = Math.floor(Math.random()*(12-1+1)+1);
    console.log("purple: " + purpleValue);
    yellowValue = Math.floor(Math.random()*(12-1+1)+1);
    console.log("yellow: " + yellowValue);
    greyValue = Math.floor(Math.random()*(12-1+1)+1);
    console.log("grey: " + greyValue);
    console.log(currentScore);

  }  

  function blueCrystal() {
    //TODO: update current score by adding the value of this.blueValue to this.currentScore(value of the crystal clicked will be passed as x)
    //      display the current score in the dv with id currentScore
    currentScore += blueValue;
    console.log(currentScore);
    $("#currentScoreDisplay").html(currentScore);
  }

  function purpleCrystal() {
    //TODO: update current score by adding the value of this.purpleValue to this.currentScore(value of the crystal clicked will be passed as x)
    //      display the current score in the dv with id currentScore
    currentScore += purpleValue;
    console.log(currentScore);
    $("#currentScoreDisplay").text(currentScore);
  }

  function yellowCrystal() {
    //TODO: update current score by adding the value of this.yellowValue to this.currentScore(value of the crystal clicked will be passed as x)
    //      display the current score in the dv with id currentScore
    currentScore += yellowValue;
    console.log(currentScore);
    $("#currentScoreDisplay").text(currentScore);
  }

  function greyCrystal() {
    //TODO: update current score by adding the value of this.greyValue to this.currentScore(value of the crystal clicked will be passed as x)
    //      display the current score in the dv with id currentScore
    currentScore += greyValue;
    console.log(currentScore);
    $("#currentScoreDisplay").text(currentScore);
  }


  startGame(); //sets all values

  $('#blue').on("click", blueCrystal);
  $('#purple').on("click", purpleCrystal);
  $('#yellow').on("click", yellowCrystal);
  $('#grey').on("click", greyCrystal);



  


