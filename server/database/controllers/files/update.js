const { DocumentFileModel } = require('../../models/DocumentFileModel')
const wrapCallback = require('../../../utils/wrapCallback')

const updateFile = (id, update, callback) => {
    const query = DocumentFileModel.findByIdAndUpdate(
        id,
        update,
        { returnOriginal: false }
    )

    return wrapCallback(
        (resolve, reject) => query.then(resolve, reject),
        callback
    )
}

const updateFileThumbnail = (id, thumbnailId, callback) => {
    return updateFile(id, { thumbnail: thumbnailId }, callback)
}

const updateFileRaw = (id, rawFileId, callback) => {
    return updateFile(id, { raw: rawFileId }, callback)
}

module.exports = { updateFileThumbnail, updateFileRaw, updateFile }