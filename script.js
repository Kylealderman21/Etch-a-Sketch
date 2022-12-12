const container = document.querySelector('#container');

let gridNum = 16;
let userSelection = prompt('Enter Grid Size from 0 - 100:');
gridNum = userSelection;

function makeGrid(gridNum) {
   let totalDivs = gridNum * gridNum;
   container.style.gridTemplateColumns = `repeat(${gridNum}, auto)`;
   container.style.gridTemplateRows = `repeat(${gridNum}, auto)`;
   for (i = 1; i <= totalDivs; i++) {
    const div = document.createElement('div');
    container.appendChild(div);
   }
}

makeGrid(gridNum);