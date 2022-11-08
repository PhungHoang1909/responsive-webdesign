var colorArray = ["pink","blue","orange", "blue"];
var colorIndex = 0;
var imageArray = ["a.jpg","b.jpg","c.jpg",
                  "d.jpg","e.jpg","f.jpg"];

var imageIndex = 0;   //start with the first image
var leftImage, rightImage;  // the two circular images
var timerSpeed = 4000;  //the speed, in milliseconds, of the time
var myInterval;  //this variable is used to work the timer

//this function runs after the page is loaded
window.onload = function () {
	prepareEverything();
}

//this function sets everything up
function prepareEverything () {
	
	//set up buttons so that they are listening to see if user clicks them
    var startButton,stopButton,speedButton;
    startButton=document.getElementById("starttimer");
    startButton.addEventListener("click",startSlideShow);

    stopButton=document.getElementById("stoptimer");
    stopButton.addEventListener("click",stopSlideShow);
	
    speedButton=document.getElementById("changeSpeed");
    speedButton.addEventListener("click",setSpeed);
		
	// grab each image
	rightImage=document.getElementById("imageRight");
	leftImage=document.getElementById("imageLeft");

	document.getElementById("theHeading").innerHTML="Phung Hoang’s View Master";
	document.getElementById("theHeading").style.color ="Blue";
}

//this function changes the image to the next image
function changeImages () {
	
	//change the src for each image
	leftImage.setAttribute ("src",imageArray[imageIndex]);
	rightImage.setAttribute ("src",imageArray[imageIndex]);
	
	//move the index so that it points to the next image unless we are at the last image, then move back to image 0
    imageIndex=imageIndex+1;
    if (imageIndex >= imageArray.length) {
	  imageIndex=0;
    } //end of if
	
	//code to change the background colors goes here
}

//this function sets the speed for the slideshow
function setSpeed () {
	if (document.getElementById("one").checked) {
		timerSpeed = 1000;
		document.body.style.backgroundColor = "pink";
	} else if (document.getElementById("two").checked)
	{
		timerSpeed = 2000;
		document.body.style.backgroundColor = "blue";
	} else if (document.getElementById("three").checked)
	{
		timerSpeed = 3000;
		document.body.style.backgroundColor = "orange";
	} else if (document.getElementById("four").checked)
	{
		timerSpeed = 4000;
		document.body.style.backgroundColor = "blue";
	}
	 //add code here to set it to the other speeds
	
	
	stopSlideShow(); //stop it in order to set the new time
    startSlideShow(); //restart the timer
}

//this function starts the slide show
function startSlideShow () {
	myInterval = setInterval(changeImages, timerSpeed);
}
//this function stops the slide show
function stopSlideShow () {
	clearInterval(myInterval);
}


