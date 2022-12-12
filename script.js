const container = document.querySelector('#container');


let gridNum = 16;
let userSelection = prompt('Enter Grid Size from 0 - 100:');
gridNum = userSelection;

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
}



makeGrid(gridNum);