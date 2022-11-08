//Purpose: This program plays a guessing game with a user to guess a randomly generated number
//Author:  Homer J. Simpson

var theAnswer;  //holds the randomly generated answer
var numOfTries = 0; //holds how many tries they have used

// generate the number that the user must guess
function generateTheAnswer() {
    numOfTries = 0;
    theAnswer = Math.floor(Math.random() * (10 - 1) + 1);
}

function checkTheGuess() {
      var theGuess;
      var highOrLow;
      theGuess = prompt("Enter your guess:", "Your guess goes here");
      while ((theGuess != theAnswer) && (theGuess != -1)) {
            if (theGuess > theAnswer) {
                  highOrLow = theGuess + " was too high! Enter -1 to quit or enter another guess:";
            } //end of true part
            else {
                  highOrLow = theGuess + " was too low! Enter -1 to quit or enter another guess:";
            } //end of else if true part
            theGuess=prompt (highOrLow, "Guess again, your next guess goes here");
            numOfTries++;
            if (numOfTries >= 5)
            {
                  alert("You lose");
            }
      } //end of while loop
      
      if (theGuess != -1 || theGuess != theAnswer && numOfTries < 5) {
            alert ("You win!");
      }else{
            alert ("You are a quitter");
      } //end of if
} //end of function