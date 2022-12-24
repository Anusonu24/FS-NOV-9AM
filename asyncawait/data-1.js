let employees = [{ id: 101, name: "Rahul", sal: 45000 }, { id: 102, name: "Sonia", sal: 55000 }]

let createEmployee = (emp) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let flag = true
            if (flag) {
                resolve("Data Inserted Successfully")
                employees.push(emp)
            }
            else {
                reject("Not Inserted")
            }
        }, [4000])
    })
}
let getEmployees = () => {
    //display inton html table
    console.log("Test Case 123")
    var rows = ""
    setTimeout(() => {

        employees.forEach((employee) => {
            rows = rows + `<tr> 
                            <td> ${employee.id}</td>
                            <td> ${employee.name}</td>
                            <td> ${employee.sal}</td>
                            </tr>`
        });
        document.getElementById('tbody_Data').innerHTML = rows
    }, [1000])
    console.log("Test 1234")

}

let execute = async () => {
    await createEmployee({ id: 103, name: "Priyanka", sal: 65000 })
    getEmployees()
}
execute()