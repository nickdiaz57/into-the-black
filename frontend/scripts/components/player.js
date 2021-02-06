class Player {
    constructor(name) {
        this.name = name
        this.position = [0,0] //starts in top left corner
        this.fuel = 100
        this.health = 100
        this.inventory = []
        this.icon = "@"
        this.sightRange = 2
        this.moveRange = 1
    }
    //add conditions for edges of map
    moveRight(dist=1) {
        //add 1 to x
        let currentPosition = this.position
        let newPosition = [currentPosition[0] + dist, currentPosition[1]]
        this.position = newPosition
    }

    moveLeft(dist=1) {
        //subtract 1 from x
        let currentPosition = this.position
        let newPosition = [currentPosition[0] - dist, currentPosition[1]]
        this.position = newPosition
    }

    moveUp(dist=1) {
        //subtract 1 from y
        let currentPosition = this.position
        let newPosition = [currentPosition[0], currentPosition[1] - dist]
        this.position = newPosition
    }

    moveDown(dist=1) {
        //add 1 to y
        let currentPosition = this.position
        let newPosition = [currentPosition[0], currentPosition[1] + dist]
        this.position = newPosition
    }
}