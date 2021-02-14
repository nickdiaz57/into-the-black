const main = document.querySelector('main')
const api = new APIAdapter

const formContainer = document.getElementById('form-container')
const form = document.getElementById('name-form')

form.addEventListener("submit", function(event) {
    event.preventDefault();
    // console.log(document.getElementById('name').value)
    api.findOrCreateUser({name: document.getElementById('name').value}).then(console.log)
})

function addUser(username){
}



// const map = new Map
// map.displayMap()
// const player = map.addPlayer()

// document.addEventListener("keydown", function(e) {
//     if (e.key === "ArrowLeft") {
//       map.movePlayer("left");
//     } else if (e.key === "ArrowRight") {
//         map.movePlayer("right");
//     } else if (e.key === "ArrowUp") {
//         map.movePlayer("up");
//     } else if (e.key === "ArrowDown") {
//         map.movePlayer("down");
//     }
//   });