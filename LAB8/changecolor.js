//this function changes heading to blue
function changeTheColorToBlue() {
   var myHeading;
    myHeading=document.getElementById("theHeading");
    myHeading.style.color="blue";
}

//this function changes heading to green
function changeTheColorToGreen() {
   var myHeading;
    myHeading=document.getElementById("theHeading");
    myHeading.style.color="green";
}

setTimeout(changeTheColorToBlue, 5000);
setTimeout(changeTheColorToGreen, 10000);


