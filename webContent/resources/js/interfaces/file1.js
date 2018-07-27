function showMessage(message) {
    showModal("Show message", "Code : " + message.code + " with " + message.name);
}
var warningMessage = {
    code: 500,
    name: "Something wrong",
    show: function (duration) {
        showModal("Warning message", "Duration " + duration + " : " + this.name);
        return 0;
    }
};
warningMessage.show(10);
var ErrorMessage = (function () {
    function ErrorMessage(name) {
        this.name = "";
        this.code = 400;
        this.show = function (duration) {
            showModal("ErrorMessage message", "Error message duration " + duration + " : " + this.name);
            return 0;
        };
        this.name = name;
    }
    ;
    return ErrorMessage;
}());
//new ErrorMessage("Internal server error").show(10)
//new ErrorMessage("File not found").show(20)
