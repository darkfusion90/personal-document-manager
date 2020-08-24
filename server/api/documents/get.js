const { getDocument, getAllDocsOfUser } = require('../../database/controllers/documents')

const get = (req, res) => {
    const docId = req.params.id

    if (docId) {
        getSingleDoc(req, res)
    } else {
        getAllDocs(req, res)
    }
}

const getSingleDoc = (req, res) => {
    const docId = req.params.id

    getDocument(docId, (err, document) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.json(document)
        }
    })
}

const getAllDocs = (req, res) => {
    const { userId } = req.session

    getAllDocsOfUser(userId, (err, docs = []) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.json({ length: docs.length, data: docs })
        }
    })
}

module.exports = get
