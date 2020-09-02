const { DocumentFileModel } = require('../../models/DocumentFileModel')
const { wrapCallback } = require('../../../utils')

const getDocumentFile = (fileId, callback) => {
    const query = DocumentFileModel.findById(fileId)
    return wrapCallback(
        (resolve, reject) => query.then(resolve, reject),
        callback
    )
}

module.exports = { getDocumentFile }