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
const colorInput = document.querySelector('#color');
let color = "black";
colorInput.addEventListener('input', changeColor);

function changeColor() {
  color = this.value;
}

function doThis(event) {
	if(event.buttons == 1) {
		this.style.backgroundColor = color;
	}
}
