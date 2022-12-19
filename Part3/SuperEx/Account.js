class Account {
    constructor(id, name, msg) {
        this.acc_Id = id;
        this.acc_Name = name
        this.message = msg
    }
}

class Savings_Account extends Account {
    constructor(id, name, amount) {
        super(id, name, "GM")
        this.amount = amount
    }
}
let s1 = new Savings_Account(101, "Rahul", 50000)
console.log(s1)
class Current_Account extends Account {
    constructor(id, name, amount) {
        super(id, name, "GN")
        this.amount = amount
    }

}
let c1 = new Current_Account(102, "Priyanka", 600000)
console.log(c1)