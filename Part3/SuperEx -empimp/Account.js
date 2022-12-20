class Account {
    constructor(id, name, msg) {
        console.log("Account - class Const")
        this.acc_Id = id;
        this.acc_Name = name
        this.message = msg
    }
    get_AccName() {
        return this.acc_Name
    }
}

module.exports = Account