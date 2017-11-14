/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
    const _search = (begin, end) => {
        if (nums[begin] === target)
            return begin
        if (nums[end] === target)
            return end
        if (end - begin <= 1)
            return -1

        const mid = Math.floor((begin + end) / 2)
        if (target === nums[mid])
            return mid

        if (nums[begin] < nums[mid]) {
            if (nums[begin] < target && target < nums[mid])
                return _search(begin + 1, mid - 1)
            return _search(mid + 1, end - 1)
        }
        if (nums[mid] <= target && target <= nums[end])
            return _search(mid + 1, end - 1)
        return _search(begin + 1, mid - 1)
    }

    return _search(0, nums.length - 1)
}
