class Modal {
    constructor(private id: string) { }
    show(title:string,content:string): void {
        $('.modal-title').html(title);
        $('.modal-body').html(content);
        $(`#${this.id}`).modal()
    }
}
function showModal(title:string,content:any){
    new Modal("myModal").show(title,content)
}