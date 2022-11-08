function calcCost()     {

//This function will calculate the cost of cupcakes based on what the number the user
//enters in the text box

//Variable Declaration
     var costPerCupcake;
     var amountOfCupcakes;
     var totalCost;
     var currencyType;

//do calculations
     costPerCupcake=3;
     amountOfCupcakes =document.getElementById("amtToGet").value;
     totalCost = amountOfCupcakes * costPerCupcake;

//display answers

     var myOpenTags;
     var myCloseTags;
     myOpenTags="<p><h1>";
     myCloseTags="</h1></p>";

     document.write("<p><h1>Total Cost: ");
     document.write(totalCost);
     currencyType=" Yen";
     document.write(currencyType);
     document.write("</h1></p> ");

     let tc="Total Cost";
     let myProgram=" \" Phung Hoang's first program! \" ";

     document.write(myProgram);
} //end of function
