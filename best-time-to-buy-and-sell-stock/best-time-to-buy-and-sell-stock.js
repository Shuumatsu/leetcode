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
