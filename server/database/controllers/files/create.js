const { DocumentFileModel } = require('../../models/DocumentFileModel')
const wrapCallback = require('../../../utils/wrapCallback')

const createDocumentFile = (opts, callback) => {
    const { document, raw, thumbnail } = opts

    const file = new DocumentFileModel({ document, raw, thumbnail })

    return wrapCallback(
        (resolve, reject) => file.save().then(resolve, reject),
        callback
    )
}

module.exports = { createDocumentFile }