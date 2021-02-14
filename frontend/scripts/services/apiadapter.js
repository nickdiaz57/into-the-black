class APIAdapter {

    constructor(port=3000) {
        this.port = port
        this.url = `http://localhost:${port}`
    }

    parseJSON = res => res.json()
    headers = {"Accepts": "application/json", "Content-Type": "application/json"}

    get usersURL() {
        return this.url + `/users`
    }

    getUsers = () => fetch(this.usersURL).then(this.parseJSON)
    getUser = (userID) => fetch(this.usersURL + `/${userID}`).then(this.parseJSON)

    findOrCreateUser(body) {
        return fetch(this.usersURL, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(body)
        }).then(this.parseJSON)
        // if (!!result.user_id) {
        //     return this.getUser(result.user_id)
        // } else {
        //     return result
        // }
    }
}

//same things for games

//stretch: fetch to let user retrieve uncompleted game and resume