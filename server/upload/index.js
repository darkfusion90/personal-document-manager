const mongoose = require('mongoose')
const multer = require('multer')
const GridFsStorage = require('multer-gridfs-storage')
const config = require('../config/gridFsConfig')

const storage = new GridFsStorage({
    db: mongoose.connection.db,
    file: () => config
})
const upload = multer({ storage })
const gridFs = new mongoose.mongo.GridFSBucket(mongoose.connection.db, config)

module.exports = { upload, gridFs }
