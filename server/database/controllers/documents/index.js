const create = require('./create')
const retrieve = require('./retrieve')
const update = require('./update')

module.exports = { ...create, ...retrieve, ...update }