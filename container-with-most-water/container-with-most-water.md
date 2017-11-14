# Container With Most Water

https://leetcode.com/problems/container-with-most-water

## Descriptions

Given _n_ non-negative integers _a1, a2, ..., an_, where each represents a point at coordinate _(i, ai)_. n vertical lines are drawn such that the two endpoints of line _i_ is at _(i, ai)_ and _(i, 0)_. Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.

## Solution

_(i, ai)_ 与 _(j, aj)_ 组成的容器的容积 _V_ 为 `Math.min(ai, aj) * (j - i)`。

`j - i` 的最大值是已知的，即最左与最右之间的距离，那么可以从左右两边向中间逼近，逼近的策略为，选取两个点中较矮的那个点，向对方移动，并且跳过高度较之前没有更高的点。

## Code 

```
/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = height => {
    let low = 0
    let high = height.length - 1
    let max = 0
    while (low < high) {
        max = Math.max(max, (high - low) * Math.min(height[low], height[high]))
        if (height[low] < height[high]) {
            low++
            continue
        }
        high--
    }

    return max
}

```
