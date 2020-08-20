const api = require('./api')
const { upload } = require('./upload')

const documentsRouter = expressApp => {
    const documents = api.documents

    expressApp.get('/api/documents/:id', documents.get)
    expressApp.post('/api/documents', documents.post)
    expressApp.put('/api/documents/:id', upload.single('document'), documents.put.uploadDocument)
}

const usersRouter = expressApp => {
    expressApp.get('/api/users/:id?', api.users.get)
}

const filesRouter = expressApp => {
    expressApp.get('/api/files/:id', api.files.get)
}

const router = expressApp => {
    usersRouter(expressApp)
    documentsRouter(expressApp)
    filesRouter(expressApp)
}

module.exports = router