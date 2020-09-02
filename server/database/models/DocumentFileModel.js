const mongoose = require('mongoose')
const { updateThumbnail } = require('../controllers/files/thumbnails')

const ObjectId = mongoose.Types.ObjectId

const DocumentFileSchema = new mongoose.Schema({
    document: {
        type: ObjectId,
        ref: 'Document'
    },
    raw: ObjectId,
    thumbnail: ObjectId,
    createdAt: {
        type: Date,
        default: Date.now
    },
})

async function updateSelfThumbnail(updateObj) {
    console.log('Before update: ', updateObj)
    const { raw } = updateObj
    if (raw) {
        const thumbnail = await updateThumbnail(raw)
        updateObj.thumbnail = thumbnail._id
    }
    console.log('After update: ', updateObj)
}

DocumentFileSchema.pre('save', async function (next) {
    console.log('DocumentFileSchema pre save hook started')
    await updateSelfThumbnail(this)
    console.log('DocumentFileSchema pre save hook ended')
    next()
})

DocumentFileSchema.pre('findOneAndUpdate', async function (next) {
    console.log('DocumentFileSchema pre findOneAndUpdate hook started')
    await updateSelfThumbnail(this._update)
    console.log('DocumentFileSchema pre findOneAndUpdate hook ended')
    next()
})

const DocumentFileModel = mongoose.model('DocumentFile', DocumentFileSchema)

module.exports = { DocumentFileModel }