let employees = [{ id: 101, name: "Rahul", sal: 45000 }, { id: 102, name: "Sonia", sal: 55000 }]

let createEmployee = (emp) => {
    //insert data into data source ie array
    setTimeout(() => {
        employees.push(emp)
    }, [4000])
}
let getEmployees = () => {
    //display inton html table
    setTimeout(() => { }, [10000])
}

createEmployee({ id: 103, name: "priyanka", sal: 650000 })
getEmployees()