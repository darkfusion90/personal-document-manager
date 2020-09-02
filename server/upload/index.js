const mongoose = require('mongoose')
const multer = require('multer')
const GridFsStorage = require('multer-gridfs-storage')
const config = require('../config/gridFsConfig')

const storage = new GridFsStorage({
    db: mongoose.connection.db,
    file: () => config.documentFiles
})
const upload = multer({ storage })

const uploadDocument = upload.single('document')

module.exports = { upload, uploadDocument }
