const { gridFs } = require('../../../upload')
const mongoose = require('mongoose')

const makeId = id => new mongoose.Types.ObjectId(id)

const fileNotFound = res => res.status(404).json({ message: 'File not found' })

const fetchFile = (req, res, next) => {
    const rawFileId = req.params.id
    if (!mongoose.isValidObjectId(rawFileId)) {
        // TODO: Replace with 400 or something similar
        return fileNotFound(res)
    }

    const fileId = makeId(rawFileId)
    gridFs.find({ _id: fileId }).toArray((err, files) => {
        if (err) {
            return res.status(500).json(err)
        }
        console.log({ files })
        if (!files[0] || files.length === 0) {
            return fileNotFound(res)
        }

        req.fetchedFile = files[0]
        next()
    })
}

module.exports = fetchFile