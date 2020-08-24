const kFileHomeUrl: string = '/api/files'

const getFileUrl = (fileId: string): string => `${kFileHomeUrl}/${fileId}`

export default { getFileUrl }