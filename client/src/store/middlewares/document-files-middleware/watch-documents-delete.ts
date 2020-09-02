import { Middleware, MiddlewareAPI, Dispatch } from "redux";
import { DeleteDocumentAction } from "../../actions/documents-actions/types";
import { deleteFile } from "../../actions/document-files-actions/documents-file-actions";
import AppState from "../../states/AppState";

const onDocumentDelete: Middleware = (api: MiddlewareAPI<Dispatch, AppState>) => next => (action: DeleteDocumentAction) => {
    if (typeof action === "function") {
        return next(action)
    }

    const fileId = action.payload.fileId
    if (fileId !== undefined) {
        // TODO: Use selector
        const file = api.getState().filesState.files.get(fileId)
        file && deleteFile(file)
    }

    next(action)
}

export default onDocumentDelete