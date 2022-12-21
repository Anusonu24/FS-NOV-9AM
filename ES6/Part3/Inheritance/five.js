class A {
    constructor() {
        console.log("A - const - special J")
    }
}
class B extends A {
    constructor() {
        //super()
        console.log("B - const - special J")
    }
}
new B()