class Parent {
    m1() {
        console.log("Parent Class - m1()")
    }
}
class Child extends Parent {
    /*   m1() {
          console.log("Child Class - m1()")
      } */
}


let a1 = new Child()
a1.m1()