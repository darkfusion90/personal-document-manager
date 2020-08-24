import React from 'react'

import DocumentModel from '../../store/models/DocumentModel'
import DocumentGridView from './DocumentGrid-View'
import api from '../../api'

interface DocumentGridContainerState {
    documents: Array<DocumentModel>
    hasLoaded: boolean
}

class DocumentGridContainer extends React.Component {
    state: DocumentGridContainerState = {
        documents: [],
        hasLoaded: false
    }

    componentDidMount() {
        this.updateDocuments()
    }

    updateDocuments = async () => {
        this.setState({ hasLoaded: false })

        const documents: Array<DocumentModel> = await api.documents.getAllDocuments()

        this.setState({ documents, hasLoaded: true })
    }

    createDocument = async () => {
        const docName = null //prompt('Enter document name: ')
        await api.documents.createDocument(docName || 'undefined doc name')

        this.updateDocuments()
    }

    render() {
        const { documents, hasLoaded } = this.state

        return <DocumentGridView
            documents={documents}
            isLoading={!hasLoaded}
            onCreateDocumentButtonClick={this.createDocument}
        />
    }
}

export default DocumentGridContainer