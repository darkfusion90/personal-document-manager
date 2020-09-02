import DocumentsState from "./DocumentsState";
import AccountState from "./AccountState";
import DocumentFilesState from "./DocumentFilesState";
import ModalState from "./ModalState";

export default class AppState {
    documentsState: DocumentsState
    accountState: AccountState
    filesState: DocumentFilesState
    modalState: ModalState

    constructor(accountState: AccountState, docsState: DocumentsState, filesState: DocumentFilesState, modalState: ModalState) {
        this.accountState = accountState
        this.documentsState = docsState
        this.filesState = filesState
        this.modalState = modalState
    }

    static initial(): AppState {
        return new AppState(
            AccountState.initial(),
            DocumentsState.initial(),
            DocumentFilesState.initial(),
            ModalState.initial()
        )
    }
}