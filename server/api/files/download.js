const { getFileStream, getThumbnailStream } = require('../../database/controllers/gridfs-buckets')

const downloadRaw = (req, res) => {
    getFileStream(req.fetchedFile.raw).pipe(res)
}

const downloadThumbnail = (req, res) => {
    getThumbnailStream(req.fetchedFile.thumbnail).pipe(res)
}

module.exports = {
    raw: downloadRaw,
    thumbnail: downloadThumbnail
}