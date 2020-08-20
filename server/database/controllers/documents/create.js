const { DocumentModel } = require('../../models/DocumentModel')
const wrapCallback = require('../../../utils/wrapCallback')

const saveDocument = (document, callback) =>
    wrapCallback((resolve, reject) => {
        document.save().then(resolve, reject)
    }, callback)


const createDocument = (name, user, docGroupId, callback) => {
    const document = new DocumentModel({ name, user, groupId: docGroupId })

    return saveDocument(document, callback)
}

const createIndividualDocument = (name, user, callback) => {
    const document = new DocumentModel({ name, user })

    return saveDocument(document, callback)
}

module.exports = { createIndividualDocument, createGroupDocument: createDocument }