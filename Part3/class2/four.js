class Account {
    acc_Id;
    acc_Name;
    acc_Bal = 0
    constructor(id, name, amout) {
        this.acc_Id = id;
        this.acc_Name = name;
        this.acc_Bal = amout
    }
}
let a1 = new Account(101, "Rahul", 5000)
let a2 = new Account(102, "Priyanka", 49999)
console.log(a1)
console.log(a2)