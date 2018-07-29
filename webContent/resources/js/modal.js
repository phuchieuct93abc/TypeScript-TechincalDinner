var Modal = (function () {
    function Modal(id) {
        this.modal = $("#" + id);
        this.modalTitle = $(".modal-title");
        this.modalBody = $(".modal-body");
    }
    Modal.prototype.show = function (title, content) {
        this.modalTitle.html(title);
        this.modalBody.html(content);
        this.modal.modal();
    };
    return Modal;
}());
function showModal(title, content) {
    new Modal("myModal").show(title, content);
}
