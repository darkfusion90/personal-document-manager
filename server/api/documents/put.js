const { getDocument } = require('../../database/controllers/documents')
const { updateFileRaw } = require('../../database/controllers/files')

const put = async (req, res) => {
    const docId = req.params.id
    // TODO: Use middleware like in fetchFile for files api
    const document = await getDocument(docId)

    const docFileId = document.fileId
    const rawFileId = resolveDocumentFileId(req)

    if (rawFileId) {
        updateFileRaw(docFileId, rawFileId, (err) => {
            console.log({ err })
            if (err) {
                return res.status(500).json(err)
            }

            res.json(document)
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

module.exports = put