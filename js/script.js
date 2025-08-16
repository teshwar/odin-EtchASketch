function makeGrid() {
  let cols = Number(prompt("Please enter the number of columns: "));
  let rows = Number(prompt("Please enter the number of rows: "));
  let gridContainer = document.querySelector(".grid-container");

  const total = cols * rows;

  for (let i = 0; i < total; i++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-cell");

    // set size for the cell by dividing the width equally
    // the width being width of grid-container
    cell.style.flexBasis = `${100 / cols}%`;
    cell.style.height = `${100 / rows}%`;

    gridContainer.appendChild(cell);
  }
}

makeGrid();
