const {
    thumbnailsBucket,
    getThumbnailByName,
    getFileStream
} = require('../gridfs-buckets')
const { pdfThumbnail, wrapCallback } = require('../../../utils')

const createThumbnail = (fileId) => {
    const pdfSrc = getFileStream(fileId)
    const thumbDest = thumbnailsBucket.openUploadStream(fileId)

    return new Promise((resolve, reject) => {
        pdfThumbnail(pdfSrc).then(thumb => {
            console.log('pdf to thumbnail conversion done. now will pipe to dest')
            thumb.pipe(thumbDest)
                .on('error', reject)
                .on('finish', resolve)
        }).catch(reject)
    })
}

const updateThumbnail = (fileId, callback) => {
    return wrapCallback(async (resolve, reject) => {
        await createThumbnail(fileId).catch(reject)
        // For the thumbnail, the file's _id (here, fileId) is the filename
        getThumbnailByName(fileId).then(resolve, reject)
    }, callback)
}

module.exports = { updateThumbnail }