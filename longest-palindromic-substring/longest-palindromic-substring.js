// failed to pass due to no tail call optimization
const encode = str => ['#', ...str.split('').join('#'), '#']

const expand = (arr, index, radius) => {
    const nextLeft = index - radius
    const nextRight = index + radius

    if (
        nextLeft >= 0 &&
        nextRight < arr.length &&
        arr[nextLeft] === arr[nextRight]
    )
        return expand(arr, index, radius + 1)

    return radius
}

/**
 * @param {string} arr
 * @return {number}
 */
const longestPalindrome = str => {
    const encoded = encode(str)

    const results = encoded.reduce(
        ({ rightMost, pos, rs }, v, i) => {
            const init =
                i < rightMost ? Math.min(rs[2 * pos - i], rightMost - i + 1) : 1

            const radius = expand(encoded, i, init)
            const right = i + radius - 1

            if (right > rightMost)
                return { rightMost: right, pos: i, rs: [...rs, radius] }
            return { rightMost, pos, rs: [...rs, radius] }
        },
        { rightMost: 0, pos: 0, rs: [] }
    )

    const { diameter, index } = results.rs.reduce(
        ({ diameter, index }, _d, i) => {
            const d = _d - 1

            return d > diameter
                ? { diameter: d, index: i }
                : { diameter, index }
        },
        { diameter: -Infinity, index: -Infinity }
    )

    const radius = (diameter - 1) / 2
    const rawIndex = (index - 1) / 2

    return str.slice(
        Math.ceil(rawIndex - radius),
        Math.floor(rawIndex + radius) + 1
    )
}
