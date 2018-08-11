var Modal = (function () {
    function Modal(id) {
        this.modal = $("#" + id);
        this.modalBody = $(".modal-body");
    }
    Modal.prototype.show = function (content) {
        this.modalBody.html(content);
        this.modal.modal();
    };
    return Modal;
}());
function showModal(content) {
    new Modal("myModal").show(content);
}
