export default interface DocumentFileModel {
    id: string
    sizeBytes: number
}

export const fromJson = (json: Object): DocumentFileModel => {
    return {
        id: json['_id'],
        sizeBytes: json['length']
    }
}