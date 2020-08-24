import UserModel from "./UserModel";

export default interface DocumentModel {
    id: string
    fileId: string
    name: string
    user: UserModel
    createdAt: Date
}