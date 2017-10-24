/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
    const _search = (begin, end) => {
        if (end - begin <= 3) {
            for (let i = begin; i <= end; i++) {
                if (nums[i] === target) return i
            }
            return -1
        }

        const mid = Math.floor((end + begin) / 2)
        if (target === nums[mid])
            return mid

        if (nums[begin] > nums[mid]) {
            if (target > nums[mid] && target <= nums[end])
                return _search(mid + 1, end)
            return _search(begin, mid - 1)
        }

        if (target >= nums[begin] && target < nums[mid])
            return _search(begin, mid - 1)
        return _search(mid + 1, end)
    }


    return _search(0, nums.length - 1)
}

const nums = [12, 13, 14, 15, 16, 17, 18, 19, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
nums.forEach(v => console.log(search(nums, v)))