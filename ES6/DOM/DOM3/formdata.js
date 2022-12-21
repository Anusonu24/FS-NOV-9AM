function fucusHandler() {
    document.getElementById('abc').style.backgroundColor = 'red'
}

function changeCase() {
    let name = document.getElementById('uname').value;
    console.log(name)
    //document.getElementById('uname').value = "gm"
    document.getElementById('uname').value = name.toUpperCase()
}