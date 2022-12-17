let a = {
    uid: 101,
    name: "Rahul"
}
let user = { ...a, email: "Rahul@gmail.com" }
//console.log(user)
let details = { email: "rahul@pm.com", sal: 45000, loc: "Wayanad" }
let user_Details = { ...user, ...details }
console.log(user_Details)