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
