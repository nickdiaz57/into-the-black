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

    addEvents() {//add other events spread throughout map
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

    movePlayer = (dir) => {//change color of encounters to differ from player and unvisited encounters when player leaves
        let prevTile = this.findPlayer()
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

        this.seeTiles()
        let newTile = this.findPlayer()
        newTile.occupied = true
        newTile.visited = true
        newTile.html.innerText = this.player.icon
    }//fix revealed visited occupied attributes of tiles as player moves

    findPlayer = () => {
        return this.tiles[this.player.position[1]][this.player.position[0]]
    }

    seeTiles = () => {//fix issues near edge of map
        let player = this.player
        for (let y = player.position[1] - player.sightRange; y <= player.position[1] + player.sightRange; y++) {
            for (let x = player.position[0] - player.sightRange; x <= player.position[0] + player.sightRange; x++) {
                if(this.isValid(y) && this.isValid(x)) {map.tiles[y][x].revealTile()}
            }
            // console.log(y)
        }
    }
    
    isValid = (num) => (num >= 0 && num <= 29)
}