import React from 'react'

import { DocumentUploadFormView } from './components'
import DocumentModel from '../../../../../../store/models/DocumentModel'
import combineClassNames from '../../../../../../utils/ClassNameCombiner'

interface DocumentUploadOverlayProps {
    document: DocumentModel
    className: string
    toggleOverlayState: () => void
}

const DocumentUploadOverlayView = ({ className, document, toggleOverlayState }: DocumentUploadOverlayProps) => {
    return (
        <div className={combineClassNames('doc-upload', className)}>
            <DocumentUploadFormView document={document} onBackButtonClicked={toggleOverlayState} />
        </div>
    )
}


export default DocumentUploadOverlayView