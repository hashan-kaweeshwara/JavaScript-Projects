var newListElement = document.createElement("li");
var btnAdd = document.getElementById("add-item");

newListElement.appendChild(document.createTextNode("List Item 3"));
newListElement.id = "item3";
console.log(newListElement);

btnAdd.addEventListener("click", function () {
  alert("Clicked");
});
