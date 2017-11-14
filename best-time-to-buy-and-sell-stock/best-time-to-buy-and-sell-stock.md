# Best Time to Buy and Sell Stock

https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

## Descriptions

Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.

## Example

### Example 1

```
Input: [7, 1, 5, 3, 6, 4]
Output: 5

max. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger than buying price)
```

### Example 2

```
Input: [7, 6, 4, 3, 1]
Output: 0

In this case, no transaction is done, i.e. max profit = 0.
```

## Solution

即找到一个子数列使得最后一个元素与第一个元素之差最大。注意到一个事实，对于序列 `a b c d` 有 `d - a` == `(d - c) + (c - b) + (b - a)`，那么问题转化为找到一个子数列使得其和最大。

遍历**新**数列 `arr`，对于 `0` 到 `length - 1` 的每一个 `index`，用 `currMax` 表示以 `index` 处（包含）结尾的子数列的最大和。所有 `currMax` 的最大值即为所寻找的最大和。`index` 处的 `currMax` 与 `index - 1` 处的 `lastMax` 的关系为：`currMax = lastMax < 0 ? arr[index] : arr[index] + lastMax`

### Code 

```
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = prices => {
    if (prices.length <= 1) return 0
    const profits = prices.slice(1).map((v, i) => v - prices[i])
    let profit = 0
    profits.reduce((maxEndingHere, v) => {
        maxEndingHere = Math.max(v, v + maxEndingHere)
        profit = Math.max(profit, maxEndingHere)
        return maxEndingHere
    }, 0)

    return profit
}
```