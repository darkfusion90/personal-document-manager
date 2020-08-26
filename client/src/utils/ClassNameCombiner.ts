function escapeUndefined(str: string) {
    return str ? str : ''
}

function combineClassNames(selfClass: string, propsClass: string) {
    const class1 = escapeUndefined(selfClass)
    const class2 = escapeUndefined(propsClass)

    return class1 + ' ' + class2
}

export default combineClassNames