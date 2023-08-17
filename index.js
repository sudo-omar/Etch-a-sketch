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

boardDimension = 500.0;

//color picker
let color = "black";
const colorInput = document.querySelector('#color');
colorInput.addEventListener('input', changeColor);

const eraserButton = document.querySelector("#eraser");
eraserButton.addEventListener('click', colorToWhite);

const clearButton = document.querySelector("#clearAll");
clearButton.addEventListener('click', clear);

const range = document.querySelector("#rangeInput");
range.addEventListener('input', dimensionChange);

const rangeValue = document.querySelector('#rangeValue');

function dimensionChange() {
  //sets range text to value of input element
  rangeValue.textContent = this.value;
  //deletes prior board
  while(container.firstChild) {
    container.removeChild(container.firstChild);
  }
  //remake board
  for(i = 0; i < this.value; i++) {
    row = document.createElement("div");
    container.appendChild(row);
    row.classList.add("row");
    for(j = 0; j < this.value; j++) {
      column = document.createElement("div");
      row.appendChild(column);
      column.classList.add("column");
      column.style.width = parseFloat(boardDimension / this.value) + "px";
      column.style.height = parseFloat(boardDimension / this.value) + "px";
      column.addEventListener('mouseenter', doThis);
      column.addEventListener('mousedown', doThis)
    }
  }

}
function clear() {
  allBoxes = document.querySelectorAll(".column");
  allBoxes.forEach(column => column.style.backgroundColor = "white");
  color = colorInput.value;
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
    
	}
}
