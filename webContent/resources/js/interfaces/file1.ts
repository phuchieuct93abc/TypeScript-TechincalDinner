interface IMessage {
    code: number,
    name: string,
    show(duration: number): void
}
function showMessage(message: IMessage) {
    showModal("Show message", `Code : ${message.code} with ${message.name}`);
}
let warningMessage: IMessage = {
    code: 500,
    name: "Something wrong",
    show: function(duration: number) {
        showModal("Warning message", `Duration ${duration} : ${this.name}`);
        return 0;
    }
}
warningMessage.show(10);

class ErrorMessage implements IMessage {
    name = ""
    constructor(name: string) {
        this.name = name;
    };
    code = 400;
    show = function(duration: number) {
        showModal("ErrorMessage message", `Error message duration ${duration} : ${this.name}`);
        return 0;
    }
}

//new ErrorMessage("Internal server error").show(10)
//new ErrorMessage("File not found").show(20)

