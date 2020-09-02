import { Middleware } from "redux";
import { SetUserAction } from "../../actions/account-actions/types";
import { getAllDocuments } from "../../actions/documents-actions/documents-actions";

const onUserChange: Middleware = (_) => next => (action: SetUserAction) => {
    getAllDocuments()
    next(action)
}

export default onUserChange