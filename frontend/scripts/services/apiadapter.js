class APIAdapter {

    constructor(port=3000) {
        this.port = port
        this.url = `http://localhost:${port}`
    }

    parseJSON = res => res.json()

    get usersURL() {
        return this.url + `/users`
    }

    getUsers = () => fetch(this.usersURL).then(this.parseJSON)
    getUser = (userID) => fetch(this.usersURL + `/${userID}`).then(this.parseJSON)
}

//fetch create new user

//same things for games

//stretch: fetch to let user retrieve uncompleted game and resume