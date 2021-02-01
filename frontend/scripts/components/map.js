class Map {
    constructor() {
        console.log('Map loaded')
    }

    generateTiles(sideLength) {
        let mapObj = {}
        // let mapObj = []
        for(let x = 0; x < sideLength; x++) {
            let col = []
            for(let y = 0; y < sideLength; y++) {
                let tile = new Tile(x,y)
                col.push(tile)
            }
            mapObj[x] = col
            // mapObj.push(col)
        }
        return mapObj
    }
}