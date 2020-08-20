const mongoose = require('mongoose')

const ObjectId = mongoose.Types.ObjectId

const DocumentSchema = mongoose.Schema({
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
    fileId: ObjectId
})

const DocumentModel = mongoose.model('Document', DocumentSchema)

module.exports = { DocumentModel }