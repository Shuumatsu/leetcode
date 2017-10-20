/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = s => {
    let begin = 0
    let end = 0
    let d = -Infinity

    const hash = new Proxy({}, {
        get: (target, property, receiver) => {
            const value = target[property]
            if (value) return value
            return 0
        }
    })

    let valid = true
    for (; end < s.length; end++) {
        const endChar = s[end]
        if (hash[endChar]++ === 1)
            valid = false

        for (; !valid; begin++) {
            const beginChar = s[begin]
            if (endChar === beginChar)
                valid = true
            hash[beginChar]--
        }
        d = Math.max(end - begin + 1, d)
    }

    return d
}
