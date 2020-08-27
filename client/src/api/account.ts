import axios from './config'
import UserModel, { fromJson as userFromJson } from '../store/models/UserModel'

const kUserUrl = '/api/users'
const kLoginStatusUrl = '/api/login_status'

const getCurrentUser = async (): Promise<UserModel> => {
    const response = await axios.get(kUserUrl)

    return userFromJson(response.data)
}

const getLoginStatus = async (): Promise<boolean> => {
    const response = await axios.get(kLoginStatusUrl)

    return response.data['isLoggedIn']
}

export default { getCurrentUser, getLoginStatus }