/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = nums => {
    nums.sort((a, b) => a - b)
    const result = []
    for (let i = 0; i < nums.length - 2; i++) {
        if (i !== 0 && nums[i] === nums[i - 1])
            continue
        let low = i + 1
        let high = nums.length - 1
        while (low < high) {
            const sum = nums[low] + nums[high] + nums[i]
            if (sum === 0) {
                result.push([nums[i], nums[low], nums[high]])
                while (nums[low] === nums[low + 1])
                    low++
                while (nums[high] === nums[high - 1])
                    high--
                high--
                low++
                continue
            }
            if (sum > 0) {
                high--
                continue
            }
            low++
        }
    }
    return result
}
