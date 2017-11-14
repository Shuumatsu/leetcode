# Maximum Product Subarray

https://leetcode.com/problems/maximum-product-subarray

## Descriptions

Find the contiguous subarray within an array (containing at least one number) which has the largest product.

For example, given the array `[2,3,-2,4]`, the contiguous subarray `[2,3]` has the largest product = `6`.

## Solution

用 `maxProduct[i]` 表示在 `i` 处（包括）结尾的子数列的最大积，所有 `maxProduct[i]` 的最大值即问题所求最大积。。

对于数列 `arr`，**`maxProduct[i]` 可完全由 `maxProduct[i - 1]` 与其自身 `arr[i]` 决定**，在 `i - 1` 之前的元素如果要对 `maxProduct[i]` 造成影响必须通过 `i - 1` 处的元素，而 `maxProduct[i - 1]` 已经考虑过这个影响。

在不考虑负数的情况，`maxProduct[i]` 与 `maxProduct[i - 1]` 的关系为：`maxProduct[i] = Math.max(maxProduct[i - 1] * arr[i], arr[i]`。

考虑到负数的情况，除 `maxProduct` 外，还需要维护一个 `minProduct` 表示在 `i` 处（包括）结尾的子数列的最小积。此时的关系为：`maxProduct[i] = Math.max(minProduct[i - 1] * arr[i], arr[i]; minProduct[i] = Math.max(maxProduct[i - 1] * arr[i], arr[i]`

### Code 

```
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = nums => {
    let r = nums[0]
    let max = nums[0]
    let min = nums[0]
    nums.slice(1).forEach(v => {
        if (v < 0) {
            const t = max
            max = min
            min = t
        }

        max = Math.max(v, max * v)
        min = Math.min(v, min * v)

        r = Math.max(r, max)
    })

    return r
}
```