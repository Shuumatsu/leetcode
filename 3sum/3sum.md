# 3sum

https://leetcode.com/problems/3sum

## Descriptions

Given an array _S_ of _n_ integers, are there elements _a, b, c_ in _S_ such that _a + b + c = 0_? Find all unique triplets in the array which gives the sum of zero.

**Note**: The solution set must not contain duplicate triplets.

```
For example, given array S = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
```

## Solution

最后的结果为一个由三元组构成的“数组”，对于每一个三元组 `(i, j, k)`，可以依次确定，因为三位的和是确定的，即依次确定 `i j`。为确定不包含重复的三元组，可以先将 `S` 排序便于跳过重复的情况。

遍历 `S` 跳过 `i !== 0 && S[i] === S[i - 1]` 的 `i`，理由如下：如果 `S[i] === S[i - 1]`，那么第一位重复，考虑第二位 `j`，`i` 与 `i - 1` 时的情况相比，`i - 1` 剩下的 `S` 包含了所有 `i` 剩下的 `S`，`j` 在 有更宽的可选范围（尽管多的部分重复）。

对于确定的 `i`，确定 `j k` 即为从剩下的 `S` 中找到 `j + k == 0 - i`。因为 `S` 是有序的，那么可以用两个指针从两边向中间逼近的方式来确定。

## Code 

```
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
```
