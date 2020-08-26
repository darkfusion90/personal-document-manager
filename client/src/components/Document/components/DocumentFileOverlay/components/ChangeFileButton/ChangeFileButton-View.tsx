import React from 'react'
import { Button } from 'react-bootstrap'

import DocumentFileModel from '../../../../../../store/models/DocumentFileModel'

interface ChangeFileButtonProps {
    file: DocumentFileModel | null
    onRequestUploadFile: () => void
}


const ChangeFileButton = ({ file, onRequestUploadFile }: ChangeFileButtonProps) => {
    const btnText = file === null ? 'Upload File' : 'Change File'
    const variant = file === null ? 'primary' : 'outline-primary'

    return (
        <Button variant={variant} onClick={onRequestUploadFile}>
            {btnText}
        </Button>
    )
}

export default ChangeFileButton