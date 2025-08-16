const newGridBtn = document.querySelector("#newGridBtn"); //get's new grid function
const btn = document.querySelector("#rainbowBtn"); // Add eventlistener to rainbow button so whenever toggle it becomes rainbow-ish :)
const picker = document.querySelector("#colorPicker"); //colorPicker used to change color of new cell
const colsInput = document.querySelector("#colsInput");
const rowsInput = document.querySelector("#rowsInput");

let gridContainer = document.querySelector(".grid-container"); //grid container
let rainbowMode = false;

// Button for toggle rainbow mode
btn.addEventListener("click", () => {
  rainbowMode = !rainbowMode;
  btn.classList.toggle("rainbowMode");
});

// Button to create new grid
newGridBtn.addEventListener("click", () => {
  let cols = parseInt(colsInput.value);
  let rows = parseInt(rowsInput.value);
  // extra safety check (optional)
  if (cols < 1 || cols > 100) {
    alert("Columns must be between 1 and 100!");
    return;
  } else if (rows < 1 || rows > 100) {
    alert("Rows must be between 1 and 100!");
    return;
  }

  // remove old grid
  gridContainer.innerHTML = "";

  // create new grid
  makeGrid(cols, rows);
});
function makeGrid(cols = 10, rows = 10) {
  const total = cols * rows;

  for (let i = 0; i < total; i++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-cell");

    // set size for the cell by dividing the width equally
    // the width being width of grid-container
    cell.style.flexBasis = `${100 / cols}%`;
    cell.style.height = `${100 / rows}%`;

    //Add mouse listener to each cell, so it changes color upon entering the cell
    // 🎨 Add hover effect with JS
    cell.addEventListener("mouseenter", () => {
      //Choose how to change color on rainbow or picker depending on if rainbow mode is on
      let color = rainbowMode ? getRandomColor() : picker.value;
      cell.style.backgroundColor = color;

      //get current opacity (0 if not set), then gradually increase it
      let opacity = parseFloat(cell.style.opacity) || 0;
      cell.style.opacity = Math.min(opacity + 0.1, 1);
    });

    gridContainer.appendChild(cell);
  }
}

// helper random color
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

makeGrid();
