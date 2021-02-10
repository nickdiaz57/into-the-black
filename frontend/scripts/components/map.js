const equals = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);

class Map {
    constructor(user=undefined) {
        // this.user = user
        this.tiles = this.generateTiles()
        this.addPlayer()
        this.addEvents()
    }

    generateTiles(sideLength=30) {
        let tileObj = {}
        for(let y = 0; y < sideLength; y++) {
            let col = []
            for(let x = 0; x < sideLength; x++) {
                let tile = new Tile(x,y)
                col.push(tile)
            }
            tileObj[y] = col
        }
        return tileObj
    }

    addEvents() {
        this.tiles[29][29].event = Event.BEACON
        const revealed = [this.tiles[29][29], this.tiles[28][29], this.tiles[27][29], this.tiles[29][28], this.tiles[29][27], this.tiles[28][28], this.tiles[27][27], this.tiles[27][28], this.tiles[28][27]]
        revealed.forEach(t => t.revealTile())
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
        return this.player
    }

    movePlayer = (dir) => {//reveal tiles as player moves
        // let tile = this.tiles[this.player.position[1]][this.player.position[0]]
        // tile.html.innerText = this.player.icon
        let prevTile = this.tiles[this.player.position[1]][this.player.position[0]]
        prevTile.populateTile()
        if (dir === "left") {
            this.player.moveLeft(this.player.moveRange);
          } else if (dir === "right") {
              this.player.moveRight(this.player.moveRange);
          } else if (dir === "up") {
              this.player.moveUp(this.player.moveRange);
          } else if (dir === "down") {
              this.player.moveDown(this.player.moveRange);
          }
        let newTile = this.tiles[this.player.position[1]][this.player.position[0]]
        newTile.html.innerText = this.player.icon
    }

    findPlayer = () => {
        return this.tiles[this.player.position[1]][this.player.position[0]]
    }
}

// [map.tiles[29][29], map.tiles[28][29], map.tiles[27][29], map.tiles[29][28], map.tiles[29][27], map.tiles[28][28], map.tiles[27][27]]