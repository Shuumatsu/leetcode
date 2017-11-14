# Two Sum

https://leetcode.com/problems/two-sum/

## Descriptions

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

## Example

```
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```

## Explanation

对于每一个元素 `x`，需要一个 `y == target - x` 与之配对，于是可以在一次遍历中，用 `map` 记录下当前元素需要的 `y`，供后来的元素比较。

## Solution Code

```
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    let result = []
    const hash = {}
    nums.forEach((num, index) => {
        if (hash[num] !== undefined)
            result = [hash[num], index]
        else
            hash[target - num] = index
    })

    return result
}
```