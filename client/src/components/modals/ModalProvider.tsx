import React from 'react'
import withModal, { IWrappedComponentType } from '../connectors/ModalConnector'
import ModalId from './@types/Modals'
import UpdateDocumentModalView from './UpdateDocumentModal/UpdateDocumentModal-View'

const ModalProvider: IWrappedComponentType = (props) => {
    switch (props.modal?.id) {
        case ModalId.updateDocumentModal:
            return <UpdateDocumentModalView />
        default:
            return null
    }
}

export default withModal(ModalProvider)
