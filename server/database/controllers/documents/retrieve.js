const { DocumentModel } = require('../../models/DocumentModel')
const wrapCallback = require('../../../utils/wrapCallback')

const getDocument = (documentId, callback) =>
    wrapCallback(DocumentModel.findById(documentId).then, callback)


module.exports = { getDocument }