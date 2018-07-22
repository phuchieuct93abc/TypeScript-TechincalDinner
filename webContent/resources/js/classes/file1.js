var A = (function () {
    function A() {
        this.name = "Class A";
    }
    return A;
}());
var B = (function () {
    function B(child) {
        this.child = child;
        this.name = "Class B with child " + this.child.name;
    }
    return B;
}());
var a = new A();
var b = new B(a);
//alert(b.name) 
