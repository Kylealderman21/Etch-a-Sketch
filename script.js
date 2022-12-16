const container = document.querySelector('#container');

let gridNum = prompt('Enter Grid Size from 1 - 100:')
makeGrid(gridNum);

function makeGrid(gridNum) {
  let totalDivs = gridNum * gridNum;
  container.style.gridTemplateColumns = `repeat(${gridNum}, auto)`;
  container.style.gridTemplateRows = `repeat(${gridNum}, auto)`;
  for (i = 1; i <= totalDivs; i++) {
    const gridElement = document.createElement('div');
    container.appendChild(gridElement);
    gridElement.addEventListener('mouseover', () => {
      gridElement.classList.add('hovered');
    });
   }
};

function removeGrid() {
    let hoveredElements = container.querySelectorAll('div');
    hoveredElements.forEach(hoveredElement => hoveredElement.remove());
    makeGrid(gridNum);
};

function changeGrid() {
}

