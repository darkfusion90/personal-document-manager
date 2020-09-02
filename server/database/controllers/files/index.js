const retrieve = require('./retrieve')
const update = require('./update')
const create = require('./create')

module.exports = { ...retrieve, ...update, ...create }