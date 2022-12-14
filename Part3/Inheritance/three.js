class A {
    m1() {
        console.log("Class A - m1 method")
    }
    m2() {
        console.log("Class A - m2 method")
    }
}
class B extends A {
    m3() {
        console.log("Class B - m3()")
    }
}
let a1 = new B()
a1.m1()
a1.m2()
a1.m3()