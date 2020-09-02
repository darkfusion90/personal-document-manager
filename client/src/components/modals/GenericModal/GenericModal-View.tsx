import React from 'react'
import { Modal } from 'react-bootstrap'

interface IGenericModalProps {
    title: ReactComponent
    body: ReactComponent
    footer: ReactComponent
}

const GenericModal: React.FC<IGenericModalProps> = ({
    title,
    body,
    footer
}) => {
    return (
        <Modal>
            <Modal.Title>{title}</Modal.Title>
            <Modal.Body>{body}</Modal.Body>
            <Modal.Footer>{footer}</Modal.Footer>
        </Modal>
    )
}

export default GenericModal
