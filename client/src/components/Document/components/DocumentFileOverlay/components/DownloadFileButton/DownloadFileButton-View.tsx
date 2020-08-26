import React from 'react'

import DocumentFileModel from '../../../../../../store/models/DocumentFileModel'
import { files as filesApi } from '../../../../../../api'

interface DownloadFileButtonProps {
    file: DocumentFileModel | null
}


const DownloadFileButton = ({ file }: DownloadFileButtonProps) => {
    if(!file){
        return null
    }

    return (
        <a
            className='btn btn-primary'
            target='_blank'
            rel='noopener noreferrer'
            href={"http://localhost:8000" + filesApi.getFileDownloadUrl(file.id)}
        >
            Download
        </a>
    )
}

export default DownloadFileButton