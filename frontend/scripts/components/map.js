const equals = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);

class Map {
    constructor(user=undefined) {
        // this.user = user
        this.tiles = this.generateTiles()
    }

    generateTiles(sideLength=30) {
        let tileObj = {}
        // for(let x = 0; x < sideLength; x++) {
        for(let y = 0; y < sideLength; y++) {
            let col = []
            // for(let y = 0; y < sideLength; y++) {
            for(let x = 0; x < sideLength; x++) {
                let tile = new Tile(x,y)
                col.push(tile)
            }
            tileObj[y] = col
        }
        return tileObj
    }

    displayMap() {
        this.html = document.createElement('div')
        this.html.id = 'map'
        main.append(this.html)
        for (const x in this.tiles) {
            this.tiles[x].forEach((t) => this.html.append(t.html))
        }
    }

    removeMap = () => this.html.remove()

    addPlayer = () => {
        //find way to add players name with form before displaying map
        this.player = new Player
        this.tiles[0][0].html.innerText = this.player.icon
    }

    // findTile = () => {
    //     for (const x in this.tiles) {
    //         return this.tiles[x].find(t => equals(t.position, this.player.position))
    //     }
    // }

    movePlayer = () => {
        let tile = this.tiles[this.player.position[1]][this.player.position[0]]
        tile.html.innerText = this.player.icon
    }

    findPlayer = () => {
        return this.tiles[this.player.position[1]][this.player.position[0]]
    }
}