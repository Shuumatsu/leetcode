# Search in Rotated Sorted Array

https://leetcode.com/problems/search-in-rotated-sorted-array

## Descriptions

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., `0 1 2 4 5 6 7` might become `4 5 6 7 0 1 2`).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

## Solution

因为 `arr` 是部分有序的，思路来自二分搜索。将 `arr` 从中分为两部分，在这里两侧共用 `mid`，最小元素所在的那一侧将有 `part[begin] > part[end]`，有序的一侧将有 `part[begin] < part[end]`。

对于有序的一侧，如果满足 `part[begin] < target < part[end]`，说明目标元素在该侧。如果不满足，则目标元素在另一侧。（作图可直观的表示）

### Code 

```
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
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

```