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

// const shrink = (accu, str, index, diameter) => {
//     if (diameter <= 0 || index === 0) return accu

//     const radius = (diameter - 1) / 2
//     const rawIndex = (index - 1) / 2

//     const v = str.slice(
//         Math.ceil(rawIndex - radius),
//         Math.floor(rawIndex + radius) + 1
//     )

//     return shrink([...accu, v], str, index, diameter - 2)
// }

const count = (accu, index, diameter) => {
    if (diameter <= 0 || index === 0) return accu

    return count(accu + 1, index, diameter - 2)
}

/**
 * @param {string} arr
 * @return {number}
 */
const countSubstrings = str => {
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

    return results.rs.reduce((accu, _diameter, index) => {
        const diameter = _diameter - 1

        return count(accu, index, diameter)
    }, 0)
}
