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
        this.display = function () {
            showModal(this.name);
        };
    }
    return B;
}());
var a = new A();
var b = new B(a);
//b.display();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9jbGFzc2VzL2NsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQUE7UUFDSSxTQUFJLEdBQUcsU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFBRCxRQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFDRDtJQUNJLFdBQW9CLEtBQVE7UUFBUixVQUFLLEdBQUwsS0FBSyxDQUFHO1FBQzVCLFNBQUksR0FBRyx3QkFBc0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFNLENBQUM7UUFDL0MsWUFBTyxHQUFHO1lBQ04sU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUN4QixDQUFDLENBQUE7SUFKOEIsQ0FBQztJQU1wQyxRQUFDO0FBQUQsQ0FBQyxBQVBELElBT0M7QUFFRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO0FBQ2hCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2pCLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBIHtcclxuICAgIG5hbWUgPSBcIkNsYXNzIEFcIjtcclxufVxyXG5jbGFzcyBCIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hpbGQ6IEEpIHt9XHJcbiAgICBuYW1lID0gYENsYXNzIEIgd2l0aCBjaGlsZCAke3RoaXMuY2hpbGQubmFtZX1gO1xyXG4gICAgZGlzcGxheSA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgc2hvd01vZGFsKHRoaXMubmFtZSlcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmxldCBhID0gbmV3IEEoKTtcclxubGV0IGIgPSBuZXcgQihhKTsgIFxyXG4vL2IuZGlzcGxheSgpO1xyXG4iXX0=