const { getDocument } = require('../../database/controllers/documents')

const get = (req, res) => {
    const docId = req.params.id

    getDocument(docId, (err, document) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(200).json(document)
        }
    })
}

module.exports = get
