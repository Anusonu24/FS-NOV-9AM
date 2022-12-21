let employees = [
  { id: 101, name: "Rahul", sal: 45000 },
  { id: 102, name: "Sonia", sal: 55000 },
  { id: 103, name: "priyanka", sal: 65000 },
  { id: 101, name: "Rahul", sal: 45000 },
  { id: 102, name: "Sonia", sal: 55000 },
  { id: 103, name: "priyanka", sal: 65000 },
  { id: 101, name: "Rahul", sal: 45000 },
  { id: 102, name: "Sonia", sal: 55000 },
  { id: 103, name: "priyanka", sal: 65000 },
  { id: 101, name: "Rahul", sal: 45000 },
  { id: 102, name: "Sonia", sal: 55000 },
  { id: 103, name: "priyanka", sal: 65000 },
  { id: 101, name: "Rahul", sal: 45000 },
  { id: 102, name: "Sonia", sal: 55000 },
  { id: 103, name: "priyanka", sal: 65000 },
];
function displayData() {
  let rows = "";
  for (emp of employees) {
    rows =
      rows +
      `<tr> 
            <td> ${emp.id}</td> 
            <td> ${emp.name}</td> 
            <td> ${emp.sal}</td> 
      </tr>`;
  }
  document.getElementById("abc").innerHTML = rows;
}
