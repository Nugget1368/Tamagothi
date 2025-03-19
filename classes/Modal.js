export class Modal{
    constructor(modal = {}){
        this.modal = modal;
    }
    Open(){
        this.modal.Open();
    }

    Close(){
        this.modal.Close();
    }
}