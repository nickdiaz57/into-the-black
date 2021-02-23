const equals = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);
const seed = {//add back events once you actually learn how to code
    OUTPOST: 6, //3,
    // FIRE: 2,
    // SPIDERS: 1,
    DERELICT: 5, //3,
    DISTRESS: 4, //3,
    // BLACKHOLE: 1,
    PIRATE: 6, //2,
    // TRADER: 4,
    // PLANET: 2,
    DEPOT: 7 //5,
    // STAR: 1,
    // SHIPYARD: 1
}

class Map {
    constructor() {
        this.completed = false
        this.won = false
        this.tiles = this.generateTiles()
        this.addEvents()
    }
    //create map, add player to map
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
    
    displayMap(user) {
        this.html = document.createElement('div')
        this.html.id = 'map'
        main.append(this.html)
        for (const x in this.tiles) {
            this.tiles[x].forEach((t) => this.html.append(t.html))
        }
        // this.addMovement()
        this.addPlayer(user)
    }

    // addMovement() {   <-- doesnt work
    //     this.html.addEventListener("keydown", function(e) {
    //         if (e.key === "ArrowLeft") {
    //           map.movePlayer("left");
    //         } else if (e.key === "ArrowRight") {
    //             map.movePlayer("right");
    //         } else if (e.key === "ArrowUp") {
    //             map.movePlayer("up");
    //         } else if (e.key === "ArrowDown") {
    //             map.movePlayer("down");
    //         }
    //       })
    // }
    
    addPlayer(user) {
        this.player = new Player(user)
        this.tiles[0][0].html.innerText = this.player.icon
        return this.player
    }
    //player movement
    movePlayer(dir) {//add visited class to tiles when player steps off, changes color to gray with css
        let prevTile = this.findPlayer()
        prevTile.occupied = false
        prevTile.populateTile()
        textMessage.innerText = ""
        buttonContainer.innerHTML = ""
        
        if (dir === "left") {//add inEvent check to player, prevent them from moving if event has been triggered and not completed
            this.player.moveLeft(this.player.moveRange);
        } else if (dir === "right") {
            this.player.moveRight(this.player.moveRange);
        } else if (dir === "up") {
            this.player.moveUp(this.player.moveRange);
        } else if (dir === "down") {
            this.player.moveDown(this.player.moveRange);
        }
        
        this.player.burnFuel()
        this.seeTiles()
        this.showInventory()
        let newTile = this.findPlayer()
        newTile.occupied = true
        newTile.visited = true
        newTile.html.innerText = this.player.icon
        if (newTile.event) {this.triggerEvent(newTile.event)}
        this.checkGameOver()
    }//why do you write garbage like this, refactor it
    
    seeTiles() {
        let player = this.player
        for (let y = player.position[1] - player.sightRange; y <= player.position[1] + player.sightRange; y++) {
            for (let x = player.position[0] - player.sightRange; x <= player.position[0] + player.sightRange; x++) {
                if(this.isValid(y) && this.isValid(x)) {map.tiles[y][x].revealTile()}
            }
        }
    }

    showInventory(){
        inventoryContainer.innerText = `Fuel: ${this.player.fuel}   Health: ${this.player.health}   Scrap: ${this.player.scrap}\nUpgrades: ${this.player.inventory}\nCrew: ${this.player.crew}`
    }
    //spread events across map on game start
    addEvents() {
        this.tiles[29][29].event = Event.BEACON
        const revealed = [this.tiles[29][29], this.tiles[28][29], this.tiles[27][29], this.tiles[29][28], this.tiles[29][27], this.tiles[28][28], this.tiles[27][27], this.tiles[27][28], this.tiles[28][27]]
        revealed.forEach(t => t.revealTile())

        for(let e in seed) {
            for(let i = 0; i < seed[e]; i++) {
                this.assignEvent(Event[e])
            }
        }
    }

    assignEvent(event) {
        let tile = this.getRandomTile()
        tile.event = event
        return tile
    }
    
    getRandomTile = () => {
        let tile
        do {
            tile = this.tiles[(Math.floor(Math.random() * 27)) + 1][(Math.floor(Math.random() * 27)) + 1]
        } while (!!tile.event)
        return tile
    }
    // handle events when player lands on tile
    triggerEvent(event) {
        let start = event.scenes['start']
        textMessage.innerText = start.text
        for (let b in start.buttons) {
            this.createButton(start.buttons[b], b, event.scenes)
        }
    }

    createButton(data, id, scenes) {//refactor this complete disaster please, my eyes hurt looking at it
        let btn = document.createElement('button')
        btn.innerText = data.value
        btn.id = id
        btn.next = data.next

        if (data.cost) {
            let resource = Object.keys(data.cost)[0]
            if (this.canAfford(resource, data.cost[resource])) {
                btn.onclick = function() {
                    //subtract cost from player
                    map.player.spendResource(resource, data.cost[resource])
                    map.nextScene(btn.next, scenes)
                }
            } else {
                btn.onclick = function() {
                    let p = document.createElement('p')
                    p.innerText = "Insufficient resources."
                    buttonContainer.append(p)
                }
            }
        } else {
            btn.onclick = function() {map.nextScene(btn.next, scenes)}
        }

        if (data.result) {
            btn.onclick = function() {
                for (let r in data.result) {
                    map.player.gainResource(r, data.result[r])
                }
                map.nextScene(btn.next, scenes)
            }
        }

        buttonContainer.append(btn)
        return btn
    }

    canAfford(resource, cost) {
        return ((this.player[resource] - cost) >= 0)
    }

    nextScene(nextSceneName, scenes) {//REFACTOR FOR THE LOVE OF GOD
        if (nextSceneName === 'end') {
            this.endEvent()
        } else if (typeof nextSceneName === 'string') {
            let target = scenes[nextSceneName]
            textMessage.innerText = target.text
            buttonContainer.innerHTML = ""
            for (let b in target.buttons) {
                this.createButton(target.buttons[b], b, scenes)
            }
        } else if (typeof nextSceneName === 'object') {
            //handle random chance
            if (!!Object.values(nextSceneName).find(v => v == 'end')) {
                this.endEvent()
            } else {
                let target = scenes[this.chance(nextSceneName)]
                textMessage.innerText = target.text
                buttonContainer.innerHTML = ""
                for (let b in target.buttons) {
                    this.createButton(target.buttons[b], b, scenes)
                }
            }
        }
    }

    chance(data) {
        let ref = Math.floor(Math.random() * 10) + 1
        let target = Object.keys(data).find(k => ref <= k)
        return data[target]
    }

    endEvent() {//add flag to event so it doesnt trigger again if player revisits tile
        textMessage.innerText = ""
        buttonContainer.innerHTML = ""
        this.showInventory()
        this.checkGameOver()//fix submitting game twice when clicking end button at beacon
    }

    checkGameOver() {
        if(this.player.checkLoss()) {
            this.completed = true
            this.won = false
            this.endGame()
        } else if (this.player.position[0] == 29 && this.player.position[1] == 29) {
            this.completed = true
            this.won = true
            this.endGame()
        }
    }

    endGame() {//fully end game, stop all movement, fix submitting a new loss when pressing arrow key after game already over and map removed
        this.removeMap()
        api.createUserGame({user:{name: this.player.name}, game:{completed: this.completed, won: this.won}})//.then(console.log)
    }//do something with fetch request - end screen?

    findPlayer = () => this.tiles[this.player.position[1]][this.player.position[0]]
    
    isValid = (num) => (num >= 0 && num <= 29)
    
    removeMap = () => this.html.remove()
}
