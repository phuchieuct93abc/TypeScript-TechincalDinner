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
var identityOTwo = identity(1, 2);
var identityThree = identity("1", "2");
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
