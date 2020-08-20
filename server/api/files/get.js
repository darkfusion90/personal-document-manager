const { gridFs } = require('../../upload')
const mongoose = require('mongoose')

const makeId = id => new mongoose.Types.ObjectId(id)

const get = (req, res) => {
    const fileId = makeId(req.params.id)
    gridFs.find({ _id: fileId }).toArray((err, files) => {
        if (err) {
            return res.status(500).json(err)
        }
        console.log({files})
        if (!files[0] || files.length === 0) {
            return res.status(404).json({ message: 'File not found' })
        }

        gridFs.openDownloadStream(fileId).pipe(res)
    })
}

module.exports = get