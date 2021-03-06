const main = document.querySelector('main')
const api = new APIAdapter
const map = new Map

const mapContainer = document.getElementById('map-container')

const formContainer = document.getElementById('form-container')
const form = document.getElementById('name-form')

const textMessage = document.getElementById('message')
const buttonContainer = document.getElementById('button-container')
const inventoryContainer = document.getElementById('inventory-container')

form.addEventListener("submit", function(event) {
    event.preventDefault();
    api.findOrCreateUser({name: document.getElementById('name').value}).then(addUser)
})

function addUser(user) {
    form.remove()
    let sentence = document.createElement('p')
    sentence.innerText = `Welcome, Commander ${user.name}.\nWins: ${getWins(user)}\nLosses: ${getLosses(user)}`
    formContainer.append(sentence)
    map.displayMap(user)
}

const getWins = (user) => {return user.games.filter(x => x.completed == true && x.won == true).length}

const getLosses = (user) => {return user.games.filter(x => x.completed == true && x.won == false).length}

document.addEventListener("keydown", function(e) {  //causes movement after map html is removed, fix this
    if (e.key === "ArrowLeft") {
      map.movePlayer("left");
    } else if (e.key === "ArrowRight") {
        map.movePlayer("right");
    } else if (e.key === "ArrowUp") {
        map.movePlayer("up");
    } else if (e.key === "ArrowDown") {
        map.movePlayer("down");
    }
  });