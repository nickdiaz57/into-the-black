class Tile {
    constructor(x=0, y=0) {
        this.revealed = false
        this.occupied = false
        this.encounters = []
        this.x = x
        this.y = y
    }
}