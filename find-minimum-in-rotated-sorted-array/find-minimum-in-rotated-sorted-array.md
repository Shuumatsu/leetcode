# Find Minimum in Rotated Sorted Array

https://leetcode.com/problems/find-minimum-in-rotated-sorted-array

## Descriptions

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., `0 1 2 4 5 6 7` might become `4 5 6 7 0 1 2`).

Find the minimum element.

You may assume no duplicate exists in the array.

## Solution

### Solution 1

顺序遍历，找到第一个 `i` 使得 `arr[i] < arr[i - 1]`，得出 `arr[i]` 即为最小值。

### Solution 2

因为 `arr` 是部分有序的，思路来自二分搜索。将 `arr` 从中分为两部分，在这里两侧共用 `mid`，最小元素所在的那一侧将有 `part[begin] > part[end]`。

不妨将问题考虑得更复杂一点，假设 `arr` 中含有重复的元素，甚至可能并没有旋转。有 `part[begin] > part[end]` 的一侧仍然是目标侧，而因为重复元素的存在，可能两侧都不满足 `part[begin] > part[end]`。

对于两侧都不满足 `part[begin] > part[end]` 的情况，那么两侧都是 `<=` 那么左侧 `part[begin]` 即为最小值。

### Code 

```
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
```