function escapeUndefined<T>(toEscape: T | undefined, orElse: () => T): T {
    if (toEscape === undefined) {
        return orElse()
    }

    return toEscape
}

export default escapeUndefined