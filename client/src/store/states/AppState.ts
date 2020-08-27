import DocumentsState from "./DocumentsState";
import AccountState from "./AccountState";
import escapeUndefined from "../../utils/EscapeUndefined";
import DocumentFilesState from "./DocumentFilesState";

export default class AppState {
    documentsState: DocumentsState
    accountState: AccountState
    filesState: DocumentFilesState

    constructor(accountState: AccountState, docsState: DocumentsState, filesState: DocumentFilesState) {
        this.accountState = accountState
        this.documentsState = docsState
        this.filesState = filesState
    }

    static initial() {
        return new AppState(AccountState.initial(), DocumentsState.initial(), DocumentFilesState.initial())
    }
}