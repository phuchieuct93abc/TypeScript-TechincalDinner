function showMessage(message) {
    alert("Code : " + message.code + " with " + message.name);
}
var msg = {
    code: 500,
    name: "Something wrong",
    show: function (duration) {
        alert("Duration " + duration + " : " + this.name);
        return 0;
    }
};
//msg.show(10);
var ErrorMessage = (function () {
    function ErrorMessage(name) {
        this.name = "";
        this.code = 400;
        this.show = function (duration) {
            alert("Error message duration " + duration + " : " + this.name);
            return 0;
        };
        this.name = name;
    }
    ;
    return ErrorMessage;
}());
new ErrorMessage("Internal server error").show(10);
new ErrorMessage("File not found").show(20);
