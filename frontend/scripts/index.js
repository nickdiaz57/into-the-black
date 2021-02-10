const main = document.querySelector('main')
const map = new Map
map.displayMap()
const player = map.addPlayer()

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      // map.player.moveLeft();
      map.movePlayer("left");
    } else if (e.key === "ArrowRight") {
        // map.player.moveRight();
        map.movePlayer("right");
    } else if (e.key === "ArrowUp") {
        // map.player.moveUp();
        map.movePlayer("up");
    } else if (e.key === "ArrowDown") {
        // map.player.moveDown();
        map.movePlayer("down");
    }
  });
// const container = document.getElementById("container");

// function makeRows(rows, cols) {
//   container.style.setProperty('--grid-rows', rows);
//   container.style.setProperty('--grid-cols', cols);
//   for (c = 0; c < (rows * cols); c++) {
//     let cell = document.createElement("div");
//     cell.innerText = (c + 1);
//     container.appendChild(cell).className = "grid-item";
//   };
// };

// makeRows(16, 16);

// //assign x and y values to grid cells with for loop