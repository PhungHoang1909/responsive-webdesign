//Code written by: Phung Hoang (huang1527)
function calcCost()     {

    //This function will calculate the cost of cupcakes based on what the number the user
    //enters in the text box
    
    //Variable Declaration
         var costPerCupcake;
         var amountOfCupcakes;
         var totalCost;
         var cupcakeTypes=[];
         cupcakeTypes=['Red Raspberry','Butter Pecan','Cherry Chocolate'];
    
    //do calculations
         costPerCupcake=3;
         amountOfCupcakes =document.getElementById("amtToGet").value;
         totalCost = amountOfCupcakes * costPerCupcake;
    
    //display answers
         document.write("<p><h1>Total Cost: ");
         document.write(totalCost);
         document.write(" dollars </h1></p>");
    
        //display types of cupcakes
        document.write( cupcakeTypes[0] );
        document.write( cupcakeTypes[1] );
        document.write( cupcakeTypes[2] );

        cupcakeTypes[3]="huang1527’s Tootie Fruity";
        cupcakeTypes[4]="Midnight Mint";

        document.write(cupcakeTypes.length);

        allTheTypes=cupcakeTypes[0] + "<br>" + cupcakeTypes[1] + "<br>" + cupcakeTypes[2] + "<br>" + cupcakeTypes[3] + "<br>" + cupcakeTypes[4] + "<br>";

        document.write(allTheTypes);
    } //end of function