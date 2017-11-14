# Product of Array Except Self

https://leetcode.com/problems/product-of-array-except-self

## Descriptions

Given an array of n integers where n > 1, `nums`, return an array `output` such that `output[i]` is equal to the product of all the elements of `nums` except `nums[i]`.

Solve it **without division** and in O(n).

For example, given `[1,2,3,4]`, return `[24,12,8,6]`.

**Follow up:**

Could you solve it with constant space complexity? (Note: The output array **does not** count as extra space for the purpose of space complexity analysis.)

## Solution

对于每一个元素 `nums[i]` 对应的输出即为其左方所有元素的积与其右方所有的的积。那么可以从左到右、从右到左分别两次遍历得出结果。第一次（左到右）遍历得出每个元素起左侧所有元素的积，第二次（从右到）的遍历从最右的元素开始补上右侧所有元素的积。

### Code 

```
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
```