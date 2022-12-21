let users = require('./data')
console.log(users)
function displayUsers() {
    let rows = ""
    let i = 0;
    while (i <= users.length - 1) {
        rows = rows + `<tr>
        <td>${users[i].id}</td>
        <td>${users[i].name}</td>
        <td>${users[i].email.toLocaleUpperCase()}</td>
        <td>${users[i].email.substr(users[i].email.indexOf('@') + 1)}</td>
        <td>${users[i].gender}</td>
        </tr>`
        i++;
    }

    document.getElementById('tbody_Data').innerHTML = rows
}