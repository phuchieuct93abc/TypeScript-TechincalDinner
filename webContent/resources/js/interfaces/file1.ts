interface IMessage {
    code: number,
    name: string,
    show: (duration: number) => number
}
function showMessage(message: IMessage) {
    alert(`Code : ${message.code} with ${message.name}`);
}
let msg: IMessage = {
    code: 500,
    name: "Something wrong",
    show: function(duration: number) {
        alert(`Duration ${duration} : ${this.name}`);
        return 0;
    }
}
//msg.show(10);

class ErrorMessage implements IMessage {
    name = ""
    constructor(name:string){
        this.name = name;    
    };
    code = 400;
    show = function(duration: number): number {
        alert(`Error message duration ${duration} : ${this.name}`);
        return 0;
    }
}

new ErrorMessage("Internal server error").show(10)
new ErrorMessage("File not found").show(20)

