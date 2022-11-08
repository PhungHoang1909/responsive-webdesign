window.onload = function () {
   prepareEverything();
   }
   function prepareEverything () {
      var myButton;
      myButton=document.getElementById("imclicky");
      myButton.addEventListener("click",clickMe);
   }
   function clickMe() {
      var myWindow;
      myWindow = window.open("http://www.uwo.ca", "", "scrollbars=yes width=600, height=600");
   }