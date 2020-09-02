const mongoose = require('mongoose')
const wrapCallback = require('../../../utils/wrapCallback')

const getFromBucket = (id, bucket, callback, useFilename = false) => {
    return wrapCallback((resolve, reject) => {
        let filter = {};
        if (useFilename) {
            filter.filename = id
        } else {
            filter._id = new mongoose.Types.ObjectId(id)
        }

        bucket.find(filter).toArray((err, items) => {
            if (err) {
                reject(err)
            }
            resolve(items[0])
        })
    }, callback)
}

const getFromBucketByName = (filename, bucket, callback) => {
    return getFromBucket(filename, bucket, callback, true)
}

module.exports = { getFromBucket, getFromBucketByName }