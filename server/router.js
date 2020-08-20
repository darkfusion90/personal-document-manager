const api = require('./api')

const router = expressApp => {
    expressApp.get('/api/users/:id?', api.users.get)
    expressApp.get('/api/documents/:id', api.documents.get)
}

module.exports = router