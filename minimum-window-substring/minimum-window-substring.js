const initialize = t => {
    const map = {}
    let num = 0
    for (let i = 0; i < t.length; i++) {
        const char = t[i]
        if (!map[char]) {
            map[char] = 1
            num++
        } else {
            map[char]++
        }
    }
    return [map, num]
}

const createIncludes = t => searchString => t.includes(searchString)

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = (s, t) => {
    const elm = createIncludes(t)
    const [hash, num] = initialize(t)

    let begin = 0
    let end = 0
    let head = 0
    let d = Infinity
    let count = 0
    for (; end < s.length; end++) {
        const endChar = s[end]
        if (elm(endChar) && --hash[endChar] === 0)
            count++

        for (; count >= num; begin++) {
            const beginChar = s[begin]
            if (end - begin + 1 < d) {
                d = end - begin + 1
                head = begin
            }
            d = Math.min(end - begin + 1, d)
            if (elm(beginChar) && ++hash[beginChar] > 0)
                count--
        }
    }

    return d === Infinity ? '' : s.slice(head, head + d)
}

