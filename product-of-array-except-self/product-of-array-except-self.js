/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = nums => {
    if (nums.length < 2) return nums
    if (nums.length === 2) return [nums[1], nums[0]]

    const res = [1]
    for (let i = 1; i < nums.length; i++) {
        res[i] = res[i - 1] * nums[i - 1]
    }
    let accu = 1
    for (let i = nums.length - 2; i >= 0; i--) {
        accu *= nums[i + 1]
        res[i] *= accu
    }

    return res
}