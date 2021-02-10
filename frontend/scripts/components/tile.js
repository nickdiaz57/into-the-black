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
        }
    }
    
    revealTile = () => {
        this.revealed = true
        if (!this.occupied) {this.populateTile()} //fix this
    }
}

//change css make text in tile gray after player visits