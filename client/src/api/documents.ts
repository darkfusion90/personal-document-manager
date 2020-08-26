import axios from './config'

import DocumentModel, { fromJson as docFromJson } from '../store/models/DocumentModel'

const kDocumentHomeUrl: string = '/api/documents'

const getDocumentUrl = (docId: string): string => `${kDocumentHomeUrl}/${docId}`

const getDocument = (docId: string): Promise<any> => {
    const url: string = getDocumentUrl(docId)
    return axios.get(url)
}

const getAllDocuments = async (): Promise<Array<DocumentModel>> => {
    const response = await axios.get(kDocumentHomeUrl)
    const documentMeta: ArrayResponseData<DocumentModel> = response.data
    const docsListJson = documentMeta.data

    return docsListJson.map(docFromJson)
}

const createDocument = async (name: string): Promise<DocumentModel> => {
    const response = await axios.post(kDocumentHomeUrl, { name })

    return docFromJson(response.data)
}

const uploadDocumentFile = async (id: string, file: File): Promise<DocumentModel> => {
    const document: FormData = new FormData()
    document.append('document', file)

    const response = await axios.put(getDocumentUrl(id), document)
    return docFromJson(response.data)
}

export default { getDocument, getAllDocuments, createDocument, uploadDocumentFile }