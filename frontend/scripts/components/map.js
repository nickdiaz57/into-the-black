class Map {
    constructor(size, user=undefined) {
        this.user = user
        this.tiles = this.generateTiles(size)
    }

    generateTiles(sideLength) {
        let tileObj = {}
        for(let x = 0; x < sideLength; x++) {
            let col = []
            for(let y = 0; y < sideLength; y++) {
                let tile = new Tile(x,y)
                col.push(tile)
            }
            tileObj[x] = col
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
}