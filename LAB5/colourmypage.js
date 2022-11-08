//change the color of the pieces of our webpage
function changeTheColor() {
    var desiredColor;
    desiredColor=document.getElementById('colorText').value;
    desiredColor=desiredColor.toLowerCase();
    document.getElementById('myWelcome').style.color = "Aqua";
    switch (desiredColor) {
    case 'green':
        document.body.style.backgroundColor="LightGreen";
        document.getElementById("myButton").style.backgroundColor="DarkOliveGreen";
    break;
    case 'yellow':
        document.body.style.backgroundColor="Gold";
        document.getElementById("myButton").style.backgroundColor="PaleGoldenRod";
    break;
    case 'navy':
        document.body.style.backgroundColor="Navy";
        document.getElementById("myButton").style.backgroundColor="Cyan";
    default:
        document.body.style.backgroundColor="White";
        alert ("Sometimes I don't know my favourite colour either!");
        break;
    }//end of switch statement
} //end of function