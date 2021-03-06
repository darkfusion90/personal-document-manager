const express = require('express')
const session = require('express-session')
const sessionConfig = require('./config/sessionConfig')
const addUserSession = require('./middlewares/addUserSession')
const router = require('./router')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(session(sessionConfig))
app.use(addUserSession)
router(app)

/* app.use(passport.initialize())
app.use(passport.session()) */


module.exports = app