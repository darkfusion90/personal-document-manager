import IModal from "../models/Modal"

export interface IModalState {
    isModalActive: boolean
    modal: IModal | null
}

export default class ModalState implements IModalState {
    isModalActive: boolean
    modal: IModal | null

    constructor(modal: IModal | null, isModalActive: boolean) {
        this.modal = modal
        this.isModalActive = isModalActive
    }

    copy(modal: IModal | null = this.modal, isModalActive: boolean = this.isModalActive) {
        return new ModalState(modal, isModalActive)
    }

    static initial(): ModalState {
        return new ModalState(null, false)
    }
}