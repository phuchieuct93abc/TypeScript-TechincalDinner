class Modal {
    modalBody: any
    modal: any
    constructor(id: string) {
        this.modal = $(`#${id}`)
        this.modalBody = $(".modal-body")
    }

    show(content: string): void {
        this.modalBody.html(content);
        this.modal.modal();
    }
}
function showModal(content: string) {
    new Modal("myModal").show(content)
}