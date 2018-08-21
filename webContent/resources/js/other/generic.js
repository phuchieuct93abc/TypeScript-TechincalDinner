var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//Generic type
function identity(arg1, arg2) {
    return arg1;
}
var identityOne = identity(1, 2);
var identityTwo = identity(1, 2);
var identityThree = identity("1", "2");
var identityFour = identity("1", 1);
//Generic Classes
var GenericCaculator = (function () {
    function GenericCaculator() {
    }
    return GenericCaculator;
}());
var NumberCaculator = (function (_super) {
    __extends(NumberCaculator, _super);
    function NumberCaculator() {
        _super.call(this);
        this.add = function (arg1, arg2) {
            return arg1 + arg2;
        };
        this.zeroValue = 0;
    }
    return NumberCaculator;
}(GenericCaculator));
var numberCaculator = new NumberCaculator();
console.log(numberCaculator.add(1, 2)); //3
console.log(numberCaculator.add(1, "2")); //Error
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJpYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3RzL290aGVyL2dlbmVyaWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxjQUFjO0FBQ2Qsa0JBQXFCLElBQU8sRUFBRSxJQUFPO0lBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFDaEIsQ0FBQztBQUVELElBQUksV0FBVyxHQUFXLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDekMsSUFBSSxXQUFXLEdBQVcsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN6QyxJQUFJLGFBQWEsR0FBVyxRQUFRLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQy9DLElBQUksWUFBWSxHQUFXLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFFNUMsaUJBQWlCO0FBQ2pCO0lBQUE7SUFHQSxDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQztBQUVEO0lBQThCLG1DQUF3QjtJQUNsRDtRQUNJLGlCQUFPLENBQUM7UUFJWixRQUFHLEdBQUcsVUFBUyxJQUFZLEVBQUUsSUFBWTtZQUNyQyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUN2QixDQUFDLENBQUE7UUFMRyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztJQUV2QixDQUFDO0lBS0wsc0JBQUM7QUFBRCxDQUFDLEFBVkQsQ0FBOEIsZ0JBQWdCLEdBVTdDO0FBQ0QsSUFBSSxlQUFlLEdBQUcsSUFBSSxlQUFlLEVBQUUsQ0FBQztBQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHO0FBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyIvL0dlbmVyaWMgdHlwZVxyXG5mdW5jdGlvbiBpZGVudGl0eTxUPihhcmcxOiBULCBhcmcyOiBUKTogVCB7XHJcbiAgICByZXR1cm4gYXJnMTtcclxufVxyXG5cclxubGV0IGlkZW50aXR5T25lOiBudW1iZXIgPSBpZGVudGl0eSgxLCAyKTtcclxubGV0IGlkZW50aXR5VHdvOiBzdHJpbmcgPSBpZGVudGl0eSgxLCAyKTtcclxubGV0IGlkZW50aXR5VGhyZWU6IHN0cmluZyA9IGlkZW50aXR5KFwiMVwiLCBcIjJcIik7XHJcbmxldCBpZGVudGl0eUZvdXI6IHN0cmluZyA9IGlkZW50aXR5KFwiMVwiLCAxKTtcclxuXHJcbi8vR2VuZXJpYyBDbGFzc2VzXHJcbmNsYXNzIEdlbmVyaWNDYWN1bGF0b3I8VD4ge1xyXG4gICAgemVyb1ZhbHVlOiBUO1xyXG4gICAgYWRkOiAoeDogVCwgeTogVCkgPT4gVFxyXG59XHJcblxyXG5jbGFzcyBOdW1iZXJDYWN1bGF0b3IgZXh0ZW5kcyBHZW5lcmljQ2FjdWxhdG9yPG51bWJlcj57XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuemVyb1ZhbHVlID0gMDtcclxuXHJcbiAgICB9XHJcbiAgICBhZGQgPSBmdW5jdGlvbihhcmcxOiBudW1iZXIsIGFyZzI6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBhcmcxICsgYXJnMjtcclxuICAgIH1cclxuXHJcbn1cclxubGV0IG51bWJlckNhY3VsYXRvciA9IG5ldyBOdW1iZXJDYWN1bGF0b3IoKTtcclxuY29uc29sZS5sb2cobnVtYmVyQ2FjdWxhdG9yLmFkZCgxLDIpKTsgLy8zXHJcbmNvbnNvbGUubG9nKG51bWJlckNhY3VsYXRvci5hZGQoMSxcIjJcIikpOyAvL0Vycm9yXHJcbiJdfQ==