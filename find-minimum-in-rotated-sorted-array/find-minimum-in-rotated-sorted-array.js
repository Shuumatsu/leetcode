/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = nums => {
    const _findMin = (begin, end) => {
        if (end - begin <= 1)
            return Math.min(...nums.slice(begin, end + 1))

        const mid = Math.floor((end + begin) / 2)
        if (nums[mid] < nums[begin])
            return _findMin(begin, mid)
        if (nums[end] < nums[mid])
            return _findMin(mid, end)
        return nums[begin]
    }

    return _findMin(0, nums.length - 1)
}

console.log(findMin([2, 3, 1]))