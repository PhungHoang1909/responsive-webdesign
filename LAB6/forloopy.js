function helpBart() {
    var theSaying;
    var temp;
    theSaying=document.getElementById('saying');
    temp=" "; //start with an empty string
    for (var count=1; count<=50; count++) {
        temp=temp+"A fire drill does not demand a fire<br/>";
    } // end of for loop
    theSaying.innerHTML=temp;
} //end of function