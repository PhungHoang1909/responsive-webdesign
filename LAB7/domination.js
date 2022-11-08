function testStuff() {
    var listItem, allTheListItems;
    allTheListItems = document.getElementsByTagName("li");
    for (var k=0; k<allTheListItems.length; k++) {
        listItem=allTheListItems[k];
        listItem.style.fontSize="12px";
        listItem.style.backgroundColor="coral";
    } //end loop
    alert(listItem.getAttribute("id"));
} //end of function