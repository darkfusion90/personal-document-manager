const mongoose = require('mongoose')
const { createDocumentFile } = require('../controllers/files')

const ObjectId = mongoose.Types.ObjectId

const DocumentSchema = new mongoose.Schema({
    groupId: {
        type: ObjectId,
        ref: 'DocumentGroup'
    },
    name: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    user: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    fileId: {
        type: ObjectId,
        ref: 'DocumentFile'
    }
})

DocumentSchema.pre('save', async function (next) {
    console.log('Pre save hook DocumentModel')
    if (this.isNew) {
        console.log('Document is new. Will create file')
        const file = await createDocumentFile({ document: this._id })
        console.log('File created: ', file)
        this.fileId = file._id
        console.log('this.fileId: ', this.fileId)
    }

    console.log('Pre save hook of old document. Do nothing')
    next()
})

const DocumentModel = mongoose.model('Document', DocumentSchema)

module.exports = { DocumentModel }