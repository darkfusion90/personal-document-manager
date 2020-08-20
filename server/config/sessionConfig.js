const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const sessionOptions = {
    secret: 'Everybody hates programming',
    resave: false,
    saveUninitialized: true,
    rolling: true,
    store: new MongoStore({
        mongooseConnection: mongoose.connection,
        autoRemove: 'interval',
    }),
    cookie: {
        maxAge: 3600000, // One hour
        secure: false,
        httpOnly: false
    }
}

module.exports = sessionOptions