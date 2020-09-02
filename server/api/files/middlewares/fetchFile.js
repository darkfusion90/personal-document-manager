const mongoose = require('mongoose')
const { getDocumentFile } = require('../../../database/controllers/files')

const fileNotFound = res => res.status(404).json({ message: 'File not found' })

const fetchFile = (req, res, next) => {
    const rawFileId = req.params.id
    if (!mongoose.isValidObjectId(rawFileId)) {
        // TODO: Replace with 400 or something similar
        return fileNotFound(res)
    }

    getDocumentFile(rawFileId, (err, file) => {
        if (err) {
            return res.status(500).json(err)
        }
        if (!file) {
            return fileNotFound(res)
        }

        req.fetchedFile = file
        next()
    })
}

module.exports = fetchFile