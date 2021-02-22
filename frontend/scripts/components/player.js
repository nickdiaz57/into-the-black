class Player {
    constructor(data) {
        this.name = data.name
        this.id = data.id
        this.position = [0,0]
        this.fuel = 100
        this.health = 100
        this.scrap = 20
        this.consumption = 5
        this.inventory = []
        this.crew = []
        this.icon = "@"
        this.sightRange = 2
        this.moveRange = 1
    }
    //add conditions for edges of map, moving beyond edge with increased move range
    moveRight(dist=1) {
        if (this.position[0] < 29) {
            let currentPosition = this.position
            let newPosition = [currentPosition[0] + dist, currentPosition[1]]
            this.position = newPosition
        }
    }

    moveLeft(dist=1) {
        if (this.position[0] > 0) {
            let currentPosition = this.position
            let newPosition = [currentPosition[0] - dist, currentPosition[1]]
            this.position = newPosition
        }
    }

    moveUp(dist=1) {
        if (this.position[1] > 0) {
            let currentPosition = this.position
            let newPosition = [currentPosition[0], currentPosition[1] - dist]
            this.position = newPosition
        }
    }

    moveDown(dist=1) {
        if (this.position[1] < 29) {
            let currentPosition = this.position
            let newPosition = [currentPosition[0], currentPosition[1] + dist]
            this.position = newPosition
        }
    }

    checkLoss(){
        return (this.health <=0 || this.fuel <= 0)
    }

    burnFuel(){
        this.fuel = (this.fuel - this.consumption)
    }
}