function showDialog(a) {
    alert(a.name);
}
var ClassA = (function () {
    function ClassA() {
    }
    ClassA.prototype.hello = function () {
        return this.name;
    };
    return ClassA;
}());
