import React from 'react';
import { Card } from 'react-bootstrap'

interface DocumentFileOverlayProps {
    show: boolean
    onHideOverlay: React.MouseEventHandler
    fileId: string
}

const DocumentFileOverlay = (props: DocumentFileOverlayProps) => {
    if (props.show) {
        return (
            <Card.ImgOverlay onMouseLeave={props.onHideOverlay} className='mx-auto'>
                Hello bro
            </Card.ImgOverlay>
        )
    }

    return null
}

export default DocumentFileOverlay