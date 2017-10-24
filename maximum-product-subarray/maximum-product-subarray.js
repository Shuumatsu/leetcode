/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = nums => {
    let r = nums[0]
    let max = nums[0]
    let min = nums[0]
    nums.slice(1).forEach(v => {
        if (v < 0) {
            const t = max
            max = min
            min = t
        }

        max = Math.max(v, max * v)
        min = Math.min(v, min * v)

        r = Math.max(r, max)
    })

    return r
}