import escapeUndefined from "../../utils/EscapeNull"

interface IdObject {
    id: string
}

class IdMap<T extends IdObject>{
    map: Map<string, T>

    static empty<T extends IdObject>() {
        return new IdMap<T>()
    }

    static fromList<T extends IdObject>(list: T[]) {
        const map = new Map<string, T>()
        for (let item of list) {
            map.set(item.id, item)
        }

        return new IdMap<T>(map)
    }

    constructor(map: Map<string, T> = new Map<string, T>()) {
        this.map = map
    }

    get = (id: string): T | undefined => this.map.get(id)

    put(value: T) {
        this.map.set(value.id, value)
    }

    remove(value: T) {
        this.map.delete(value.id)
    }

    copy(map?: Map<string, T>): IdMap<T> {
        return new IdMap({ ...escapeUndefined(map, () => this.map) })
    }
}

export default IdMap