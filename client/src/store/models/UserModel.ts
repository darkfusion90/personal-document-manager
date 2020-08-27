export default interface UserModel {
    id: string
    username: string
    createdAt: Date
    isRegistered: boolean
}

export const fromJson = (json: Object): UserModel => {
    return {
        id: json['_id'],
        username: json['username'],
        createdAt: json['createdAt'],
        isRegistered: json['isRegistered']
    }
}