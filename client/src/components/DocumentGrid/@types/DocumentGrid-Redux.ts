import DocumentModel from "../../../store/models/DocumentModel"

export interface StateToProps {
    documents: Array<DocumentModel>
}

export interface DispatchToProps {
    createDocument: ValueCallback<string>
    getAllDocuments: VoidCallback
}

export type IPropsFromRedux = StateToProps & DispatchToProps

export type IDocumentGridReduxProps = IPropsFromRedux