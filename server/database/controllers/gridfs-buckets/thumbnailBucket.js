const mongoose = require('mongoose')

const { getFromBucket, getFromBucketByName } = require('./retrieve')
const { thumbnails } = require('../../../config/gridFsConfig')

const thumbnailsBucket = new mongoose.mongo.GridFSBucket(
    mongoose.connection.db,
    thumbnails
)

const getThumbnail = (fileId, callback) => {
    return getFromBucket(fileId, thumbnailsBucket, callback)
}

const getThumbnailByName = (filename, callback) => {
    return getFromBucketByName(filename, thumbnailsBucket, callback)
}

const getThumbnailStream = fileId => thumbnailsBucket.openDownloadStream(new mongoose.Types.ObjectId(fileId))
const getThumbnailStreamByName = filename => thumbnailsBucket.openDownloadStreamByName(filename)

module.exports = {
    thumbnailsBucket,
    getThumbnail,
    getThumbnailByName,
    getThumbnailStream,
    getThumbnailStreamByName
}