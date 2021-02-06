class Tile {
    constructor(x=0, y=0, encounter=undefined) {
        this.revealed = false
        this.occupied = false
        this.visited = false
        this.encounter = encounter
        this.x = x
        this.y = y
        this.position = [x, y]
        this.populateTile()
    }

    populateTile = () => {
        if (!this.html) {this.html = document.createElement('div')}

        if (!!this.encounter) {
            this.html.innerText = 'encounter'
        } else {
            this.html.innerText = '.'
            // this.html.innerText = `${this.x}, ${this.y}`
        }
        //adds a character to a tile's html based on what encounter it has
    }

    revealTile = () => {
        this.revealed = true
    }
}

//change css make text in tile gray after player visits