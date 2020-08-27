import DocumentModel from '../models/DocumentModel';
import IdMap from '../utils/IdMap';

import escapeUndefined from '../../utils/EscapeNull';

export default class DocumentsState {
    documents: IdMap<DocumentModel>

    constructor(documents: IdMap<DocumentModel>) {
        this.documents = documents
    }

    copy(documents?: IdMap<DocumentModel>): DocumentsState {
        const docsEscaped = escapeUndefined<IdMap<DocumentModel>>(documents, () => this.documents)

        return new DocumentsState(docsEscaped)
    }

    static initial(): DocumentsState {
        const docs = IdMap.empty<DocumentModel>()

        return new DocumentsState(docs)
    }
}


