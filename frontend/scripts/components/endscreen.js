class endScreen {
    
    constructor() {
        main.innerHTML = ""

        const endMessage = document.createElement('p')
        main.append(endMessage)

        const newGameButton = document.createElement('button')
        newGameButton.innerText = "Journey again"
        newGameButton.onclick = function(user) {new Map(user)} //<--change map to send ajax request on map creation
    }

}