class A {
    m1() {
        console.log("Class - A : m1()")
    }
}
class B extends A {
    constructor(a, b) {
        super()
    }
    m1() {
        //super.m1()
        console.log("Class - B : m1()")
    }
    m2() {
        console.log("Class - B : m2()")
    }
}
let b = new B(10, 20);
b.m1()
b.m2()