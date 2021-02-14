const formContainer = document.getElementById('form-container')
const form = document.getElementById('name-form')

form.addEventListener("submit", function(event) {
    event.preventDefault();
    // console.log(document.getElementById('name').value)
    APIAdapter.postUser({name: document.getElementById('name').value}).then(console.log)
})

function addUser(username){
}