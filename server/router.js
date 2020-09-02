const api = require('./api')
const { uploadDocument } = require('./upload')

const documentsRouter = expressApp => {
    const documents = api.documents

    expressApp.get('/api/documents/:id?', documents.get)
    expressApp.post('/api/documents', documents.post)
    expressApp.put('/api/documents/:id', uploadDocument, documents.put)
}

const usersRouter = expressApp => {
    expressApp.get('/api/users/:id?', api.users.get)
    expressApp.get('/api/login_status', api.users.loginStatus)
}

const filesRouter = expressApp => {
    const {
        files: {
            get,
            download,
            middlewares: { fetchFile }
        }
    } = api

    expressApp.get('/api/files/:id', fetchFile, get.file)
    expressApp.get('/api/files/:id/raw', fetchFile, get.raw)
    expressApp.get('/api/files/:id/thumbnail', fetchFile, get.thumbnail)
    expressApp.get('/api/files/:id/raw/download', fetchFile, download.raw)
    expressApp.get('/api/files/:id/thumbnail/download', fetchFile, download.thumbnail)
}

const router = expressApp => {
    usersRouter(expressApp)
    documentsRouter(expressApp)
    filesRouter(expressApp)
}

module.exports = router
