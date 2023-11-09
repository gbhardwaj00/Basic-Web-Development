var input = document.getElementById("userInput");
var list = document.querySelector("ul");
var button = document.getElementById("enter");

// variable to detect only the first button click
var deleted = false;

//delete p element from DOM
function deletep() {
  document.getElementById("emptylist").outerHTML = "";
  deleted = true;
}

function removeParent(event) {
  event.target.parentElement.remove();
}

function createAndAddli(){
  var newli = document.createElement("li");
  var text = document.createTextNode(input.value);
  newli.appendChild(text);
  list.appendChild(newli);
  input.value="";
  var newButton = document.createElement("button");
  newButton.appendChild(document.createTextNode("Delete"));
  newButton.onclick = removeParent;
  newli.appendChild(newButton);
}

button.addEventListener("click", function(){
  if((input.value.length > 0) && (deleted === false)) {
    deletep();
  }
  if(input.value.length > 0) {
     createAndAddli();
  }
});

input.addEventListener("keypress", function(event){
  if((input.value.length > 0) && (deleted === false)) {
    if(event.which === 13) {
      deletep();
    }
  }
  if(input.value.length > 0 && event.which === 13) {
     createAndAddli();
  }
});

list.addEventListener("click", function(event) {
  event.target.classList.toggle("done");
});