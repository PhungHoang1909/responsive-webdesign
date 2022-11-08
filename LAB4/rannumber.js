function getRandomNumber(low, high) {
    var ranNum;
    var answerarea;
    low=low*1; //change from string to number
    high=high*1;//change from string to number
    ranNum= Math.random()*(high-low+1); //figure out how many numbers to get
    ranNum=Math.floor(ranNum); //turn into integer
    ranNum=ranNum + low; //move the lower boundary up from 0 to the smallest number
    // alert(ranNum);
    answerarea=document.getElementById("answer")
    answerarea.innerHTML=ranNum;
}