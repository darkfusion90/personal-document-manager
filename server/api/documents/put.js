const { updateDocumentFileId } = require('../../database/controllers/documents')

const put = (req, res) => {
    const docId = req.params.id
    const fileId = resolveDocumentFileId(req)

    if (fileId) {
        updateDocumentFileId(docId, fileId, (err, updatedDoc) => {
            if (err) {
                res.status(500).json(err)
            } else {
                res.status(200).json(updatedDoc)
            }
        })
    } else {
        res.json({})
    }
}

const resolveDocumentFileId = req => {
    if (req.file) {
        return req.file.id
    }
}

module.exports = { uploadDocument: put }