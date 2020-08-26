const KB = 1024
const MB = 1048576
const GB = 1073741824

class SizeUnit {
    unit: string
    size: number

    constructor(unit: string, size: number) {
        this.unit = unit
        this.size = size
    }

    fixedSize = (n: number = 2) => this.size.toFixed(n)

    static auto(sizeBytes: number): SizeUnit {
        console.log({ sizeBytes, modGb: sizeBytes % GB })
        if (sizeBytes / GB >= 1) {
            return new SizeUnit('GB', sizeBytes / GB)
        } else if (sizeBytes / MB >= 1) {
            return new SizeUnit('MB', sizeBytes / MB)
        } else if (sizeBytes / KB >= 1) {
            return new SizeUnit('KB', sizeBytes / KB)
        } else {
            return new SizeUnit('B', sizeBytes)
        }
    }

    toString = (): string => `${this.fixedSize()} ${this.unit}`
}

export default SizeUnit