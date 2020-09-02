import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import AppState from '../../store/states/AppState'
import { documentListSelector } from '../../store/selectors/document-selectors'
import { createDocument, getAllDocuments } from '../../store/actions/documents-actions/'

import DocumentGridView from './DocumentGrid-View'
import { IDocumentGridReduxProps, StateToProps, DispatchToProps } from './@types/DocumentGrid-Redux'

const DocumentGridRedux = ({ getAllDocuments, ...props }: IDocumentGridReduxProps) => {
    useEffect(() => {
        getAllDocuments()
    }, [getAllDocuments])

    const createDocument = async () => {
        props.createDocument('HelloDocument')
    }

    return (
        <DocumentGridView
            onCreateDocument={createDocument}
            isLoading={false}
            documents={props.documents}
        />
    )
}

const mapStateToProps = (state: AppState): StateToProps => {
    console.log({ state })
    return {
        documents: documentListSelector(state),
    }
}

const mapDispatchToProps: DispatchToProps = {
    createDocument,
    getAllDocuments
}

export default connect(mapStateToProps, mapDispatchToProps)(DocumentGridRedux)
