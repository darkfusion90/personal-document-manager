const documentFileBucket = require('./documentFileBucket')
const thumbnailBucket = require('./thumbnailBucket')
const retrieve = require('./retrieve')

module.exports = { ...documentFileBucket, ...thumbnailBucket, ...retrieve }