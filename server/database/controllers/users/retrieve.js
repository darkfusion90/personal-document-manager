const { UserModel } = require('../../models/UserModel')
const wrapCallback = require('../../../utils/wrapCallback')

const getUser = (userId, callback) => {
    const query = UserModel.findById(userId)

    return wrapCallback((resolve, reject) => {
        query.then(resolve, reject)
    }, callback)
}

module.exports = { getUser }