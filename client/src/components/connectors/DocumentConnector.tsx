import React, { useEffect, ComponentType } from 'react'
import { connect } from 'react-redux'

import DocumentModel from '../../store/models/DocumentModel'
import AppState from '../../store/states/AppState'
import { getDocument } from '../../store/actions/documents-actions'
import { documentSelector } from '../../store/selectors/document-selectors'

export interface PropsForWrappedComponent {
    document: DocumentModel | undefined
}

declare type DocumentConnectorWrappedComponent = ComponentType<PropsForWrappedComponent>

interface IOwnProps {
    documentId: string
}

interface IStateToProps {
    document: DocumentModel | undefined
}

interface IDispatchToProps {
    getDocument: ValueCallback<string>
}

declare type IPropsFromRedux = IStateToProps & IDispatchToProps
declare type IDocumentConnectorProps = IPropsFromRedux & IOwnProps

const ComponentWrapper = (Component: DocumentConnectorWrappedComponent) => {
    const mapStateToProps = (state: AppState, ownProps: IOwnProps): IStateToProps => {
        return {
            document: documentSelector(ownProps.documentId)(state)
        }
    }

    const mapDispatchToProps: IDispatchToProps = { getDocument }

    const DocumentConnector: React.FunctionComponent<IDocumentConnectorProps> = (props) => {
        const { getDocument, documentId, document } = props
        useEffect(() => {
            if (!document) {
                getDocument(documentId)
            }
        }, [getDocument, documentId, document])

        return <Component document={props.document} />
    }

    return connect<IStateToProps, IDispatchToProps, IOwnProps, AppState>(mapStateToProps, mapDispatchToProps)(DocumentConnector)
}


const withDocumentConnector = (documentId: string, Component: DocumentConnectorWrappedComponent) => {
    const Wrapped = ComponentWrapper(Component)
    return <Wrapped documentId={documentId} />
}

export default withDocumentConnector
