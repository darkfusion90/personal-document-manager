function getSingleChunk<T>(array: Array<T>, chunkIndex: number, chunkSize: number): Array<T> {
    const startPos = chunkIndex * chunkSize
    const endPos = startPos + chunkSize

    return array.slice(startPos, endPos)
}

function getChunks<T>(array: Array<T>, chunkSize: number): Array<Array<T>> {
    const chunkCount = Math.ceil(array.length / chunkSize)
    const chunks = new Array<Array<T>>()

    for (let i = 0; i < chunkCount; i++) {
        chunks.push(getSingleChunk<T>(array, i, chunkSize))
    }

    return chunks
}

export { getChunks }