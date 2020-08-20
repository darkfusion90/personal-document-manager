const { DocumentModel } = require('../../models/DocumentModel')
const wrapCallback = require('../../../utils/wrapCallback')

const createDocument = (name, user, docGroupId, callback) => {
    const document = new DocumentModel({ name, user, groupId: docGroupId })

    return wrapCallback((resolve, reject) => {
        document.save().then(resolve, reject)
    }, callback)
}

const createIndividualDocument = (name, user, callback) => createDocument(name, user, null, callback)

module.exports = { createIndividualDocument, createGroupDocument: createDocument }