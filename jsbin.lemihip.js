function setColor(color) {

var body = document.querySelector("body");

body.style.background = color;

}

// Set color of <h3> on page

function setTextColor(color)
{
var text = document.querySelector("h3");
text.style.color = color;
}

// Get all h3 elements and add event listeners. When clicked, use 
// the color selected in section 5 to change the text color.

var h3List = document.querySelectorAll("h3");
for(var i = 0; i < h3List.length; i++) 
{
h3List[i].addEventListener("click", function() {
var color = document.querySelector("#choose-color").value;
this.style.color = color;
});
}


var sectionList = document.querySelectorAll("section");
var selected = null;

for(var i = 0; i < sectionList.length; i++)
{
sectionList[i].addEventListener("click", function() {
if(this.className === "selected")
{
this.className = "";
selected = null;
}
else 
{
if(selected != null)
selected.className = "";
this.className = "selected";
selected = this;
}
});
}