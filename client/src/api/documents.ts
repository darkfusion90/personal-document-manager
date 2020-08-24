import api from './config'

import DocumentModel from '../store/models/DocumentModel'

const kDocumentHomeUrl: string = '/api/documents'

const getDocumentUrl = (docId: string): string => `${kDocumentHomeUrl}/${docId}`

const getDocument = (docId: string): Promise<any> => {
    const url: string = getDocumentUrl(docId)
    return api.get(url)
}

const getAllDocuments = async (): Promise<Array<DocumentModel>> => {
    const response = await api.get(kDocumentHomeUrl)
    const documentMeta: ArrayResponseData<DocumentModel> = response.data

    return documentMeta.data
}

const createDocument = async (name: string): Promise<DocumentModel> => {
    const response = await api.post(kDocumentHomeUrl, { name })

    return response.data
}

export default { getDocument, getAllDocuments, createDocument }