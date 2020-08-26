const { gridFs } = require('../../upload')

const download = (req, res) => {
    gridFs.openDownloadStream(req.fetchedFile._id).pipe(res)
}

module.exports = download