container = document.getElementById("container");
for(i = 0; i < 16; i++) {
  row = document.createElement("div");
  container.appendChild(row);
  row.classList.add("row");
  for(j = 0; j < 16; j++) {
    column = document.createElement("div");
    row.appendChild(column);
    column.classList.add("column");
   
    column.addEventListener('mouseenter', doThis);
    column.addEventListener('mousedown', doThis)
  }
}

//color picker
let color = "black";
const colorInput = document.querySelector('#color');
colorInput.addEventListener('input', changeColor);

const eraserButton = document.querySelector("#eraser");
eraserButton.addEventListener('click', colorToWhite);

const clearButton = document.querySelector("#clearAll");
clearButton.addEventListener('click', clear);

function clear() {
  allBoxes = document.querySelectorAll(".column");
  allBoxes.forEach(column => column.style.backgroundColor = "white");
}
function colorToWhite() {
  color = "white";
}

function changeColor() {
  color = this.value;
}

function doThis(event) {
	if(event.buttons == 1) {
		this.style.backgroundColor = color;
    console.log(getComputedStyle(this).getPropertyValue("opacity"));
	}
}
