import React from 'react'
import withModal, { IWrappedComponentType } from '../../connectors/ModalConnector'
import GenericModal from '../GenericModal'

const UpdateDocumentModalView: IWrappedComponentType = (props) => {
    return <GenericModal
        title={() => <div>Modal Title</div>}
        body={() => <div>Modal Body</div>}
        footer={() => <div>Modal Footer</div>}
    />
}

export default withModal(UpdateDocumentModalView)