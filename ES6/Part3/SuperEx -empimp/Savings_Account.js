const Account = require('./Account')
class Savings_Account extends Account {
    constructor(id, name, amount) {
        super(id, name, "GM")
        console.log("Saving_Account Class Const")
        this.amount = amount
    }
}
let s1 = new Savings_Account(101, "Rahul", 50000)
console.log(s1)
let name = s1.get_AccName();
console.log(name)
