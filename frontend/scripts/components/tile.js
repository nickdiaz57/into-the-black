class Tile {
    constructor(x=0, y=0, encounter=undefined) {
        this.revealed = false
        this.occupied = false
        this.encounter = encounter
        this.x = x
        this.y = y
        this.populateTile()
    }

    populateTile = () => {
        this.html = document.createElement('div')
        if (!!this.encounter) {
            this.html.innerText = 'encounter'
        } else {
            this.html.innerText = '.'
        }
        //adds a character to a tile's html based on what encounter it has
    }

    revealTile = () => {
        this.revealed = true
    }
}