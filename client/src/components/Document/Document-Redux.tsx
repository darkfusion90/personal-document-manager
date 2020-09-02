import React from 'react'
import withDocumentConnector, { PropsForWrappedComponent as DocumentConnectorWrappedComponentProps } from '../connectors/DocumentConnector'
import DocumentView from './Document-View'

interface IDocumentReduxProps {
    documentId: string
}

const DocumentRedux = (props: IDocumentReduxProps) => {
    return withDocumentConnector(props.documentId, WrappedDocumentRedux)
}

const WrappedDocumentRedux: React.FC<DocumentConnectorWrappedComponentProps> = (props) => {
    return <DocumentView document={props.document} />
}

export default DocumentRedux
