class Account {
    min_Bal = 500;
    acc_Bal = 0;
    acc_Name = ""
    set_AccontName(name) {
        this.acc_Name = name
    }
    depoist_Amount(amount) {
        this.acc_Bal = this.acc_Bal + amount
    }
    get_Bal() {
        return this.acc_Bal - this.min_Bal
    }
}
let a1 = new Account()
let a2 = new Account()
console.log(a1)
console.log(a2)
a1.set_AccontName("Rahul")
a2.set_AccontName("Priyanka")
console.log("After Updating Name")
console.log(a1)
console.log(a2)
console.log("After Deposit")
a1.depoist_Amount(5000)
a2.depoist_Amount(50001)
console.log(a1)
console.log(a2)