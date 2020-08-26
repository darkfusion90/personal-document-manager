const get = (req, res) => {
    res.json(req.fetchedFile)
}

module.exports = get