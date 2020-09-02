import React from 'react'
import { Container, Card } from 'react-bootstrap'

import DocumentModel from '../../store/models/DocumentModel'
import { DocumentFilePreview } from './components'

interface DocumentViewProps {
    document: DocumentModel | undefined
}

const DocumentView = (props: DocumentViewProps) => {
    const { document } = props

    if (typeof document === "undefined") {
        return <Container>Loading Document</Container>
    }

    return (
        <Card>
            <DocumentFilePreview document={document} />
            <Card.Body>
                <Card.Title>{document.name}</Card.Title>
                <Card.Text>
                    Created on: {document.createdAt}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default DocumentView