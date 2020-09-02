const mongoose = require('mongoose')

const { getFromBucket } = require('./retrieve')
const { documentFiles } = require('../../../config/gridFsConfig')

const documentFilesBucket = new mongoose.mongo.GridFSBucket(
    mongoose.connection.db,
    documentFiles
)

const getFile = (fileId, callback) => {
    return getFromBucket(fileId, documentFilesBucket, callback)
}

const getFileStream = fileId => documentFilesBucket.openDownloadStream(fileId)

module.exports = { documentFilesBucket, getFile, getFileStream }