const { DocumentModel } = require('../../models/DocumentModel')
const wrapCallback = require('../../../utils/wrapCallback')

const createQueryOpts = (documentId, fileId) => {
    return {
        filters: { _id: documentId },
        update: { fileId },
        options: { returnOriginal: false },
    }
}

const updateDocumentFileId = (documentId, fileId, callback) => {
    const { filters, options, update } = createQueryOpts(documentId, fileId)
    const query = DocumentModel.findOneAndUpdate(filters, options, update)

    return wrapCallback((resolve, reject) => {
        query.then(resolve, reject)
    }, callback)
}

module.exports = { updateDocumentFileId }