let enames = ["Rahul", "Sonia", "Priyanka", "Modi"]
//create new Array based on existing
let new_Enames = []

for (ename of enames) {
    //new_Enames.push("GM")
    new_Enames.push(ename.toUpperCase())
}
console.log(enames)
console.log(new_Enames)