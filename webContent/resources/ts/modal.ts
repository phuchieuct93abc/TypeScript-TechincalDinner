class Modal {
    modalTitle: any;
    modalBody: any
    modal: any
    constructor(id: string) {
        this.modal = $(`#${id}`)
        this.modalTitle = $(".modal-title");
        this.modalBody = $(".modal-body")
    }

    show(title: string, content: string): void {
        this.modalTitle.html(title);
        this.modalBody.html(content);
        this.modal.modal();
    }
}
function showModal(title: string, content: any) {
    new Modal("myModal").show(title, content)
}