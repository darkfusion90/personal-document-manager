const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        index: true,
        unique: true
    },
    password: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    expiresAt: {
        type: Date,
        default: undefined //This field is set to undefined by default. Adding here only for clarity
    },
    isRegistered: {
        type: Boolean,
        default: false
    }
})

UserSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 })
UserSchema.index({ username: 'text' })

UserSchema.methods.verifyPassword = function (password) {
    return this.password === password
}

const UserModel = mongoose.model('User', UserSchema)

module.exports = { UserSchema, UserModel }