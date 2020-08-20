module.exports = {
    MONGO_URI: 'mongodb://localhost:54000/docManager',
    MONGO_CLIENT_OPTS: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 50000,
        socketTimeoutMS: 50000,
        keepAlive: true
    }
}
