import { createSelector } from 'reselect'

import IdMap from '../utils/IdMap'
import DocumentModel from '../models/DocumentModel'
import DocumentsState from '../states/DocumentsState'
import AppState from '../states/AppState'

declare type DocumentMap = IdMap<DocumentModel>
declare type DocumentList = Array<DocumentModel>

export const documentStateSelector = (state: AppState): DocumentsState => state.documentsState

export const documentMapSelector = <T extends AppState | DocumentsState>(state: T): DocumentMap => {
    if (state instanceof DocumentsState) {
        return state.documents
    }

    return documentStateSelector(state as AppState).documents
}

export const documentListSelector = createSelector<AppState | DocumentsState, DocumentMap, DocumentList>(
    documentMapSelector,
    (documentMap): DocumentList => documentMap.values()
)

export const documentSelector = (id: string) =>
    createSelector<AppState | DocumentsState, DocumentMap, DocumentModel | undefined>(
        documentMapSelector,
        (documentMap) => documentMap.get(id)
    )


export default { documentStateSelector, documentMapSelector, documentSelector, documentListSelector }