const api = require('./api')
const { upload } = require('./upload')

const documentsRouter = expressApp => {
    const documents = api.documents

    expressApp.get('/api/documents/:id?', documents.get)
    expressApp.post('/api/documents', documents.post)
    expressApp.put('/api/documents/:id', upload.single('document'), documents.put.uploadDocument)
}

const usersRouter = expressApp => {
    expressApp.get('/api/users/:id?', api.users.get)
}

const filesRouter = expressApp => {
    const { files } = api
    const { middlewares } = files

    const setRoute = (route, handler) => {
        expressApp.get(route, middlewares.fetchFile, handler)
    }

    setRoute('/api/files/:id', files.get)
    setRoute('/api/files/:id/download', files.download)
}

const router = expressApp => {
    usersRouter(expressApp)
    documentsRouter(expressApp)
    filesRouter(expressApp)
}

module.exports = router