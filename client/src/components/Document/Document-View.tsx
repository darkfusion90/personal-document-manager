import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import DocumentModel from '../../store/models/DocumentModel'
import { DocumentFilePreview } from './components'

interface DocumentViewProps {
    document: DocumentModel
}

const DocumentView = (props: DocumentViewProps) => {
    const { document } = props

    return (
        <Card>
            <DocumentFilePreview fileId={document.fileId} />
            <Card.Body>
                <Card.Title>{document.name}</Card.Title>
                <Card.Text>
                    Created on: {document.createdAt}
                </Card.Text>
                <Button variant="primary">Download</Button>
            </Card.Body>
        </Card>
    )
}

export default DocumentView