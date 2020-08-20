const { getUser } = require('../../database/controllers/users')

const get = (req, res) => {
    console.log('get user: ', { params: req.params })
    const userId = resolveUserId(req)

    getUser(userId, (err, user) => {
        console.log({ err, user })
        if (err) {
            return res.status(500).json(err)
        }

        res.status(200).json(user)
    })
}

const resolveUserId = req => {
    return req.params.id || req.session.userId
}

module.exports = get