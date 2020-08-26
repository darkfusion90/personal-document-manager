import React from 'react'
import { Image } from 'react-bootstrap'

import DocumentFileModel from '../../../../../../store/models/DocumentFileModel'
import SizeUnit from '../../../../../../utils/SizeUnits';
import docIcon from '../../../../../../assets/icons/document.svg'

interface FileInfoProps {
    file: DocumentFileModel | null
}

const FileInfo = ({ file }: FileInfoProps) => {
    if (!file) {
        return null
    }

    const fileSize = SizeUnit.auto(file.sizeBytes)
    return (
        <div className='mb-3'>
            <Image src={docIcon} className='doc-icon mr-2' />
            <span className='ml-2'>
                {fileSize.toString()}
            </span>
        </div>
    )
}

export default FileInfo