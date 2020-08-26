import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'

import api from '../../../../api'
import DocumentFileModel from '../../../../store/models/DocumentFileModel'
import DocumentModel from '../../../../store/models/DocumentModel'

import DocumentFileOverlay from '../DocumentFileOverlay'
import './DocumentFilePreview-Style.css'

interface DocumentFilePreviewProps {
    document: DocumentModel
}

const DocumentFilePreview = ({ document }: DocumentFilePreviewProps) => {
    const [file, setFile] = useState<DocumentFileModel | null>(null)
    console.log({ file })
    useEffect(() => {
        async function fetchFile() {
            setFile(await api.files.getFile(document.fileId))
        }

        fetchFile()
    }, [document])

    const renderPreview = () => {
        /* if (file) {
            return <PdfEmbed src={api.files.getFileDownloadUrl(file.id)} />
        } else { */
        return <Card.Img src='http://localhost:4000/bro.jpg' />

    }

    return (
        <div className='doc-preview-container'>
            {renderPreview()}
            <DocumentFileOverlay file={file} document={document} className='doc-overlay' />
        </div>
    )
}

export default DocumentFilePreview