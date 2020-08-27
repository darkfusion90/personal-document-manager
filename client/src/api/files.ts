import DocumentFileModel, {
    fromJson as jsonToDocumentFile
} from "../store/models/DocumentFileModel"
import axios from './config'

const kFileHomeUrl: string = '/api/files'

const getFileUrl = (fileId: string): string => `${kFileHomeUrl}/${fileId}`

const getFileDownloadUrl = (fileId: string): string => `${getFileUrl(fileId)}/download`

const getFile = async (fileId: string): Promise<DocumentFileModel> => {
    const response = await axios.get(getFileUrl(fileId))

    return jsonToDocumentFile(response.data)
}

const deleteFile = async (fileId: string): Promise<any> => {
    return await axios.delete(getFileUrl(fileId))
}

export default { deleteFile, getFile, getFileUrl, getFileDownloadUrl }