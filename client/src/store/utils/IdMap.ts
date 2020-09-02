interface ObjectWithId {
    id: string
}

class IdMap<T extends ObjectWithId>{
    map: {}

    constructor(map: {} = {}) {
        this.map = map
    }

    static empty<T extends ObjectWithId>() {
        return new IdMap<T>()
    }

    static fromList<T extends ObjectWithId>(list: T[]) {
        const map = {}
        for (let item of list) {
            map[item.id] = item
        }

        return new IdMap<T>(map)
    }

    get = (id: string): T | undefined => this.map[id]

    put(value: T) {
        this.map[value.id] = value
    }

    remove(value: T) {
        delete this.map[value.id]
    }

    copy(): IdMap<T> {
        return new IdMap({ ...this.map })
    }

    values(): T[] {
        return Object.values(this.map)
    }
}

export default IdMap