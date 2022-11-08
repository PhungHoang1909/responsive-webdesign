//calculate the area of a rectangle given its width and height
function calcArea(width, height) {
    var area;
    var answerarea;
    area = width * height;
    answerarea=document.getElementById("answer");
    answerarea.innerHTML=area;
}

//calculate the perimeter of a rectangle given its width and height
function calcPeri(width, height) {
    var peri;
    var answerarea;
    peri = (width *2) + (height*2);
    answerarea=document.getElementById("answer");
    answerarea.innerHTML=peri;
}