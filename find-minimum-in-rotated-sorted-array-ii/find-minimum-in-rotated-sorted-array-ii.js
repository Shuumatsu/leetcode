/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = nums => {
    const _findMin = (begin, end) => {
        if (end - begin <= 1) return Math.min(...nums.slice(begin, end + 1))

        const mid = Math.floor((end + begin) / 2)
        if (nums[begin] > nums[mid])
            return _findMin(begin, mid)
        if (nums[mid] > nums[end])
            return _findMin(mid, end)
        if (nums[mid] === nums[begin] && nums[mid] === nums[end])
            return _findMin(begin + 1, end - 1)

        return nums[begin]
    }

    return _findMin(0, nums.length - 1)
}