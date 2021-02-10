class Tile {
    constructor(x=0, y=0, event=undefined) {
        this.revealed = false
        this.occupied = false
        this.visited = false
        this.event = event
        this.x = x
        this.y = y
        this.position = [x, y]
        this.createHTML()
    }

    createHTML() {
        if (!this.html) {this.html = document.createElement('div')}
    }

    populateTile = () => {
        if (!!this.event) {
            this.html.innerText = this.event.icon
        } else {
            this.html.innerText = '.'
            // this.html.innerText = `${this.x}, ${this.y}`
        }
    }
    
    revealTile = () => {
        //adds a character to a tile's html based on what event it has
        this.revealed = true
        this.populateTile()
    }
}

//change css make text in tile gray after player visits