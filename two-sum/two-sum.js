/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    let result = []
    const hash = {}
    nums.forEach((num, index) => {
        if (hash[num] !== undefined) result = [hash[num], index]
        else hash[target - num] = index
    })

    return result
}
