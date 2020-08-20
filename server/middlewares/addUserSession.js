const { createTemporaryUser } = require('../database/controllers/users')

const middleware = (req, _, next) => {
    if (!req.session.userId) {
        createTemporaryUser().then(user => {
            req.session.userId = user._id
            req.session.save()
            next()
        })
    } else {
        next()
    }
}

module.exports = middleware