var Modal = (function () {
    function Modal(id) {
        this.id = id;
    }
    Modal.prototype.show = function (title, content) {
        $('.modal-title').html(title);
        $('.modal-body').html(content);
        $("#" + this.id).modal();
    };
    return Modal;
}());
function showModal(title, content) {
    new Modal("myModal").show(title, content);
}
