import React, { useState } from 'react';

import { DocumentInfoOverlay, DocumentUploadOverlay } from './overlays'

import DocumentFileModel from '../../../../store/models/DocumentFileModel';
import './DocumentFileOverlay-Style.css'
import DocumentModel from '../../../../store/models/DocumentModel';

interface DocumentFileOverlayProps {
    file: DocumentFileModel | null
    document: DocumentModel
    className: string
}

enum OverlayState { info, upload }

const isOverlayInfo = (overlay: OverlayState) => overlay === OverlayState.info

const DocumentFileOverlay = ({ file, document, className }: DocumentFileOverlayProps) => {
    const [overlayState, setOverlayState] = useState<OverlayState>(OverlayState.info)

    const toggleOverlayState = () => {
        const state = isOverlayInfo(overlayState) ? OverlayState.upload : OverlayState.info
        setOverlayState(state)
    }

    if (isOverlayInfo(overlayState)) {
        return <
            DocumentInfoOverlay
            file={file}
            className={className}
            toggleOverlayState={toggleOverlayState}
        />
    } else {
        return <
            DocumentUploadOverlay
            document={document}
            className={className}
            toggleOverlayState={toggleOverlayState}
        />
    }
}

export default DocumentFileOverlay