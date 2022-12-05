const container = document.querySelector('#container');

let gridNum = 16;
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