export default interface DocumentModel {
    id: string
    fileId: string | undefined
    name: string
    user: string
    createdAt: Date
}

export const fromJson = (json: Object): DocumentModel => {
    return {
        id: json['_id'],
        fileId: json['fileId'],
        name: json['name'],
        user: json['user'],
        createdAt: json['createdAt']
    }
}