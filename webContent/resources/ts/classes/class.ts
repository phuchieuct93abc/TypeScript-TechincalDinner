class A {
    name = "Class A";
}
class B {
    constructor(private child: A) {}
    name = `Class B with child ${this.child.name}`;
    display = function(){
        showModal(this.name)
    }

}

let a = new A();
let b = new B(a);  
//b.display();
