import React from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

import { FileInfo, DownloadFileButton, ChangeFileButton } from '../../components'
import DocumentFileModel from '../../../../../../store/models/DocumentFileModel';

interface DocumentFileOverlayProps {
    file: DocumentFileModel | null
    className: string
    toggleOverlayState: () => void
}

export const DocumentInfoOverlayView = ({ file, className, toggleOverlayState }: DocumentFileOverlayProps) => {
    return (
        <div className={className}>
            <div className='d-flex flex-column align-items-center justify-content-center h-100' >
                <FileInfo file={file} />

                <ButtonGroup>
                    <DownloadFileButton file={file} />
                    <ChangeFileButton file={file} onRequestUploadFile={toggleOverlayState} />
                </ButtonGroup>
            </div>
        </div>
    )
}

export default DocumentInfoOverlayView
