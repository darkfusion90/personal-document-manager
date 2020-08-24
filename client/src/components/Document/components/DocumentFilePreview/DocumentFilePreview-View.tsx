import React, { useState } from 'react'
import { Card } from 'react-bootstrap'

import './DocumentFilePreview-Style.css'
import DocumentFileOverlay from '../DocumentFileOverlay'

interface DocumentFilePreviewProps {
    fileId: string
}

const DocumentFilePreview = (props: DocumentFilePreviewProps) => {
    const [isOverlayVisible, setOverlayVisibility] = useState(false)

    const hideOverlay = () => setOverlayVisibility(false)

    const showOverlay = () => setOverlayVisibility(true)

    return (
        <>
            <Card.Img
                src='http://127.0.0.1:5500/bro.jpg'
                className={isOverlayVisible ? 'has-overlay' : ''}
                onMouseEnter={showOverlay}
            />
            <DocumentFileOverlay 
                fileId={props.fileId}
                onHideOverlay={hideOverlay}
                show={isOverlayVisible}
            />
        </>
    )
}

export default DocumentFilePreview