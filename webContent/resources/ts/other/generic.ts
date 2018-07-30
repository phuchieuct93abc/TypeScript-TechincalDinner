//Generic type
function identity<T>(arg1: T, arg2: T): T {
    return arg1;
}

let identityOne: number = identity(1, 2);
let identityTwo: string = identity(1, 2);
let identityThree: string = identity("1", "2");
let identityFour: string = identity("1", 1);

//Generic Classes
class GenericCaculator<T> {
    zeroValue: T;
    add: (x: T, y: T) => T
}

class NumberCaculator extends GenericCaculator<number>{
    constructor() {
        super();
        this.zeroValue = 0;

    }
    add = function(arg1: number, arg2: number) {
        return arg1 + arg2;
    }

}
let numberCaculator = new NumberCaculator();
console.log(numberCaculator.add(1,2)); //3
console.log(numberCaculator.add(1,"2")); //Error
