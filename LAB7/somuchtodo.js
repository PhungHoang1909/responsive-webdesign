function testStuff() {
    var newListItem;
    var toDoList;
    var secondItem;
    secondItem=document.getElementById("second");
    toDoList=document.getElementById("todo");
    newListItem=document.createElement("li");
    // toDoList.appendChild(newListItem);
    // toDoList.removeChild(secondItem);
    toDoList.insertBefore(newListItem,secondItem);
    newListItem.innerHTML = prompt ("What do you want to do next? ");
    newListItem.setAttribute("class","kitchen");
}