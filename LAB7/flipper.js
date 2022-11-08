function testStuff() {
    var theCard;
    theCard = document.getElementById("aCard");
    var aPara;
    aPara=document.getElementById("flippy");
    if (aPara.innerText != "Flip Out") {
        theCard.setAttribute("src","front.jpg");
        aPara.innerHTML ="<h2>Flip Out</h2>";
    } else {
        theCard.setAttribute("src","back.jpg")
        aPara.innerHTML ="<h2>Flip</h2>";
    } //end of else
} //end of function