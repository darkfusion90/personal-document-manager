const { Readable } = require('stream')
const { spawn } = require('child_process')
const fs = require('fs')
const crypto = require('crypto')

const getRandomHex = () => crypto.randomBytes(8).toString('hex')

const createTempDir = () => {
    const tempDir = `/tmp/personal-doc-manager-${getRandomHex()}`
    return new Promise((resolve, reject) => {
        fs.mkdir(tempDir, err => {
            if (err) {
                return reject(err)
            }

            resolve(tempDir)
        })
    })
}

const getTemporaryFilename = async ext => {
    const random = getRandomHex()
    const dirname = await createTempDir()

    return `${dirname}/${random}${ext}`
}

const writePdf = async (srcBuffer, filename) => {
    srcBuffer.pipe(fs.createWriteStream(filename))
}

const createPdfThumbnail = async pdfPath => {
    const escapeFilename = filename => `"${filename}"`
    const logCmd = prefix => data => console.log(prefix, `${data}`)

    const tempThumbFilename = await getTemporaryFilename('.png')

    const cmd = 'ghostscript'
    const opts = [
        '-sDEVICE=png48',
        '-o',
        escapeFilename(tempThumbFilename),
        '-dFirstPage=1',
        '-dLastPage=1',
        escapeFilename(pdfPath)
    ]

    const ghostscript = spawn(cmd, opts)
    ghostscript.stdout.on('data', logCmd('stdout -> '))

    return new Promise((resolve, reject) => {
        ghostscript.stderr.on('data', data => {
            logCmd('stderr -> ')(data)
            // Rejects output like: "This file has error by... "
            // Recreate by applying command on $HOME/Documents/Lecture_Algo_DS.pdf
            //reject(data)
        })

        ghostscript.on('close', code => {
            console.log('ghostscript ended with code:', code)
            resolve(tempThumbFilename)
        })
    })
}

const pdfThumbnail = async (srcBuffer) => {
    const canRead = srcBuffer instanceof Readable
    if (!canRead) {
        return Promise.reject(`Param srcBuffer must be Readable. Received: ${srcBuffer}`)
    }

    const pdfPath = await getTemporaryFilename('.pdf')
    console.log({ pdfPath })
    await writePdf(srcBuffer, pdfPath)
    const thumbnailPath = await createPdfThumbnail(pdfPath)
    console.log({ thumbnailPath })

    return Promise.resolve(fs.createReadStream(thumbnailPath))
}

module.exports = pdfThumbnail