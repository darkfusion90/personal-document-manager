const { DocumentModel } = require('../../models/DocumentModel')
const wrapCallback = require('../../../utils/wrapCallback')

const getDocument = (documentId, callback) => {
    const query = DocumentModel.findById(documentId)
    wrapCallback((resolve, reject) => {
        query.then(resolve, reject)
    }, callback)
}

const getAllDocsOfUser = (user, callback) => {
    const query = DocumentModel.find({ user })
    wrapCallback((resolve, reject) => {
        query.then(resolve, reject)
    }, callback)
}

module.exports = { getDocument, getAllDocsOfUser }