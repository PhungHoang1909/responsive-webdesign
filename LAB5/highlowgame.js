var theAnswer;
var numOfTries;

// generate the number that the user must guess
function generateTheAnswer() {
    numOfTries=0;
    theAnswer=Math.floor(Math.random() * (10-1) + 1);
    alert (theAnswer);
}

//function to check the user’s guess against the answer
function checkTheGuess() {
        var theGuess; //holds users guess
        theGuess=document.getElementById('guess').value * 1;
        if (numOfTries < 3) { //allow them to keep guessing as they still have tries
        if (theGuess > theAnswer) {
            numOfTries=numOfTries+1;
            alert ("Too High");
        }//end of first INNER if

    if (theGuess < theAnswer) {
        numOfTries=numOfTries+1;
        alert ("Too Low");
    }//end of second INNER if

    if (theGuess == theAnswer) {
        alert ("You Win");
        } //end of third INNER if
    } //end of true part for OUTER if

    else {
        alert("Sorry, you have run out of tries.");
        } //end of else for OUTER if
} //end of function