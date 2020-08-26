import React from 'react'
import {
    Button,
    ButtonGroup,
    Form,
    FormFile
} from 'react-bootstrap'

import DocumentModel from '../../../../../../../store/models/DocumentModel'
import { documents as documentsApi } from '../../../../../../../api'
import './DocumentUploadForm-Style.css'

interface DocumentUploadFormProps {
    document: DocumentModel
    onBackButtonClicked: React.MouseEventHandler
}

interface DocumentUploadFormState {
    file: File | null
    document: DocumentModel
}

const kFormId = 'doc-upload-form'

class DocumentUploadFormView extends React.Component<DocumentUploadFormProps, DocumentUploadFormState> {
    constructor(props: DocumentUploadFormProps) {
        super(props)
        this.state = {
            file: null,
            document: { ...this.props.document }
        }
    }

    handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        let selectedFiles: FileList
        if (e.target.files !== null) {
            selectedFiles = (e.target.files as FileList)
        } else {
            selectedFiles = new FileList()
        }

        const file: File | null = selectedFiles.item(0)
        this.setState({ file })
    }

    uploadFile = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const { document } = this.props
        const { file } = this.state
        console.log('will submit')
        console.log({ file })

        let toUpload: File | null = this.state.file
        if (toUpload !== null) {
            const updatedDocument: DocumentModel = await documentsApi.uploadDocumentFile(document.id, toUpload)
            this.setState({ document: updatedDocument })
        }
    }

    hasSelectedAnyFile = () => this.state.file !== null

    render() {
        return (
            <Form onSubmit={this.uploadFile} id={kFormId} className='h-100 d-flex flex-column align-items-center justify-content-center'>
                <Form.Row className='mb-2'>
                    <Form.Group className='doc-file-input-group'>
                        <FormFile>
                            <FormFile.Label>Choose a file to upload:</FormFile.Label>
                            <FormFile.Input className='doc-file-input' accept='.pdf' onChange={this.handleFileChange} />
                        </FormFile>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <ButtonGroup>
                        <Button form={kFormId} type='submit' disabled={!this.hasSelectedAnyFile()}>
                            Upload File
                        </Button>
                        <Button variant='outline-secondary' onClick={this.props.onBackButtonClicked}>
                            Go Back
                        </Button>
                    </ButtonGroup>
                </Form.Row>
            </Form>
        )
    }
}

export default DocumentUploadFormView
