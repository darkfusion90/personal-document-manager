const gridFs = require('../../database/controllers/gridfs-buckets')

const getFile = (req, res) => {
    res.json(req.fetchedFile)
}

const handleGridFs = res => (err, data) => {
    if (err) {
        return res.status(500).json(err)
    }

    res.json(data)
}

const getRaw = (req, res) => {
    gridFs.getFile(req.fetchedFile.raw, handleGridFs(res))
}

const getThumbnail = (req, res) => {
    gridFs.getThumbnail(req.fetchedFile.thumbnail, handleGridFs(res))
}

module.exports = { file: getFile, raw: getRaw, thumbnail: getThumbnail }