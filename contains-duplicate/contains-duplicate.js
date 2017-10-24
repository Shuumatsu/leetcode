/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = nums => {
    const hash = {}
    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i]
        if (hash[curr] !== undefined)
            return true
        hash[curr] = true
    }

    return false
}