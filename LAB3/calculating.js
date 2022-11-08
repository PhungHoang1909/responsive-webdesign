function calcCost() {

//This function will calculate the cost of cupcakes based on what the number the user
//enters in the text box

//Variable Declaration
    var costPerCupcake;
    var amountOfCupcakes;
    var totalCost;

//do calculations
    costPerCupcake=4.5;

    amountOfCupcakes =document.getElementById("amtToGet").value;
    totalCost = amountOfCupcakes * costPerCupcake;

//display answers
    document.write("<p><h1>Total Cost: ");
    document.write(totalCost);
    document.write(" dollars </h1></p>");
} // end of function