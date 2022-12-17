let enames = ["Rahul", "Sonia", "Priyanka", "Modi"]
//create new Employee Names in form of - Capital Case 


let new_Enames = enames.forEach((ename) => {
    return ename.toUpperCase()
})
console.log(enames)
console.log(new_Enames)