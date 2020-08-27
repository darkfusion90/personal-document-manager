import DocumentFileModel from '../models/DocumentFileModel';
import IdMap from '../utils/IdMap';

import escapeUndefined from '../../utils/EscapeNull';

export default class DocumentFilesState {
    files: IdMap<DocumentFileModel>

    constructor(files: IdMap<DocumentFileModel>) {
        this.files = files
    }

    copy(files?: IdMap<DocumentFileModel>): DocumentFilesState {
        const filesEscaped = escapeUndefined<IdMap<DocumentFileModel>>(files, () => this.files)

        return new DocumentFilesState(filesEscaped)
    }

    static initial(): DocumentFilesState {
        const files = IdMap.empty<DocumentFileModel>()

        return new DocumentFilesState(files)
    }
}


