const crypto = require('crypto')
const { UserModel } = require('../../models/UserModel')
const wrapCallback = require('../../../utils/wrapCallback')

const createUser = (username, password, callback) => {
    const user = new UserModel({ username, password })

    return wrapCallback((resolve, reject) => {
        user.save().then(resolve, reject)
    }, callback)
}

const createTemporaryUser = (callback) => {
    const randomId = crypto.randomBytes(8).toString('hex')

    return createUser(randomId, null, callback)
}

module.exports = { createUser, createTemporaryUser }