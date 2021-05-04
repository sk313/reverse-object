function reverseObj (obj) {
    if (
        typeof obj !== 'object' ||
        Array.isArray(obj) ||
        !obj ||
        Object.keys(obj).length === 0
    ) {
        return obj
    }

    let result
    while (typeof obj === 'object') {
        const [key, val] = Object.entries(obj)[0]
        if (!result) {
            result = key
        } else {
            result = { [key]: result }
        }
        obj = val
    }

    return { [obj]:　result }
}

export default reverseObj