function timesTable() {
    var theTimesTable;
    var temp;
    theTimesTable=document.getElementById('times');
    temp="1 * 9 = 9 <br/>";
    temp="";
    for (var i=1; i<=12; i++ ) {
        temp= temp + i + "* 1 = " + (i*1) + "<br/>";
    } //end of for loop
    for (var i=1; i<=12; i++ ) {
        temp= temp + i + "* 2 = " + (i*2) + "<br/>";
    } //end of for loop
    for (var i=1; i<=12; i++ ) {
        temp= temp + i + "* 3 = " + (i*3) + "<br/>";
    } //end of for loop
    for (var i=1; i<=12; i++ ) {
        temp= temp + i + "* 4 = " + (i*4) + "<br/>";
    } //end of for loop
    for (var i=1; i<=12; i++ ) {
        temp= temp + i + "* 5 = " + (i*5) + "<br/>";
    } //end of for loop
    for (var i=1; i<=12; i++ ) {
        temp= temp + i + "* 6 = " + (i*6) + "<br/>";
    } //end of for loop
    for (var i=1; i<=12; i++ ) {
        temp= temp + i + "* 7 = " + (i*7) + "<br/>";
    } //end of for loop
    for (var i=1; i<=12; i++ ) {
        temp= temp + i + "* 8 = " + (i*8) + "<br/>";
    } //end of for loop
    for (var i=1; i<=12; i++ ) {
        temp= temp + i + "* 9 = " + (i*9) + "<br/>";
    } //end of for loop
    for (var i=1; i<=12; i++ ) {
        temp= temp + i + "* 10 = " + (i*10) + "<br/>";
    } //end of for loop
    for (var i=1; i<=12; i++ ) {
        temp= temp + i + "* 11 = " + (i*11) + "<br/>";
    } //end of for loop
    for (var i=1; i<=12; i++ ) {
        temp= temp + i + "* 12 = " + (i*12) + "<br/>";
    } //end of for loop
    theTimesTable.innerHTML=temp;
} //end of function