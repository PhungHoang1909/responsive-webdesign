function helpBartMore() {
    var theSaying;
    var temp;
    theSaying=document.getElementById('saying');
    temp="<table border='1'>";
    for (var j=1; j<=20; j++) {
        temp=temp+ "<tr>";
        for (var i=1; i<=4; i++) {
            temp = temp + "<td>";
            temp = temp + "</td>";
        } //end of inner loop
        temp = temp + "</tr>";
    } //end of outer loop
    temp = temp +"</table>";
    theSaying.innerHTML = temp;
} //end of function