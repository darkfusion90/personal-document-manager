import React from 'react'
import { Button, Row, Col, Container } from 'react-bootstrap'

import DocumentModel from '../../store/models/DocumentModel'
import DocumentView from '../Document'
import { LoadingDocumentsView, NoDocumentsView } from './components'
import { getChunks } from '../../utils/ArrayUtils'

interface DocumentGridViewProps {
    documents: Array<DocumentModel>
    isLoading: boolean
    onCreateDocumentButtonClick: React.MouseEventHandler
}

function gridifyComponents<T>(array: Array<T>): Array<Array<T>> {
    return getChunks<T>([...array], 4)
}

const DocumentGridView = (props: DocumentGridViewProps) => {
    const renderCol = (document: DocumentModel) => {
        return (
            <Col lg={3} md={4} sm={6} xs={12} key={document.id}>
                <DocumentView document={document} />
            </Col>
        )
    }

    const renderRow = (row: Array<DocumentModel>) => {
        return <Row key={row[0].id}>{row.map(renderCol)}</Row>
    }

    const renderAllDocuments = () => {
        const grid = gridifyComponents<DocumentModel>(props.documents)
        return grid.map(renderRow)
    }

    const renderDocumentContent = () => {
        if (props.isLoading) {
            return <LoadingDocumentsView />
        } else if (props.documents.length === 0) {
            return <NoDocumentsView />
        } else {
            return renderAllDocuments()
        }
    }

    return (
        <>
            <Container fluid>
                {renderDocumentContent()}
            </Container>
            <Button variant='primary' onClick={props.onCreateDocumentButtonClick}>
                Create Document
            </Button>
        </>
    )
}

export default DocumentGridView