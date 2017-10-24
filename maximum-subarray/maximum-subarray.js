/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = nums => {
    let max = -Infinity
    nums.reduce((maxEndingHere, v) => {
        maxEndingHere = Math.max(v, v + maxEndingHere)
        max = Math.max(maxEndingHere, max)
        return maxEndingHere
    }, 0)

    return max
}