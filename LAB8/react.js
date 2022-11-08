var firstPara;
firstPara=document.getElementById("para1");
firstPara.addEventListener("mouseover",goingIn);
firstPara.addEventListener("mouseout",goingOut);
firstPara.addEventListener("mouseover",alertMe);

function goingIn () {
	var secondPara;
	secondPara = document.getElementById("para2");
	secondPara.innerHTML = secondPara.innerHTML + "<br/>Mouse has come in above!<br/>";
} //end of function

function goingOut () {
	var secondPara;
	secondPara = document.getElementById("para2");
	secondPara.innerHTML = secondPara.innerHTML + "<br/>Mouse has gone out!<br/>";
	secondPara.style.color ="magenta";
	secondPara.style.fontSize="20px";
}

function alertMe() {
	alert("My mouse is still over the first paragraph");
}