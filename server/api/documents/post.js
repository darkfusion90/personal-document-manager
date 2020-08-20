const { createIndividualDocument } = require('../../database/controllers/documents')

const post = (req, res) => {
    const { name } = req.body
    const { userId } = req.session

    createIndividualDocument(name, userId, (err, createdDoc) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(200).json(createdDoc)
        }
    })
}

module.exports = post