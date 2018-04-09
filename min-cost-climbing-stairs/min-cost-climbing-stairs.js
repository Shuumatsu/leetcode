/**
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = cost => {
    const h = (i, a, b) => {
        if (i === -1) return Math.min(a, b)

        const r = cost[i] + Math.min(a, b)
        return h(i - 1, r, a)
    }

    return h(cost.length - 1, 0, 0)
}
