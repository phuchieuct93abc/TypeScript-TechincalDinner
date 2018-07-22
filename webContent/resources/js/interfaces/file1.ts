interface Message {
    code: number,
    name: string
}
function showMessage(message: Message) {
    alert(`Code : ${message.code} with ${message.name}`);
}
let msg: Message = {
    code: 500,
    name: "Something wrong"
}
//showMessage(msg)