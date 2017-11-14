const trampoline = kont => {
    while (typeof kont === 'function')
        kont = kont()

    return kont.val
}

/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = height => {
    const h = (condition, f, n) => condition(n) ? n : h(condition, f, f(n))

    const _maxArea = (left, right, curr) => {
        if (right <= left)
            return { val: curr }

        const max = Math.max(Math.min(height[left], height[right]) * (right - left), curr)

        if (height[left] >= height[right]) {
            const condition = n => height[n] > height[right] || n <= left
            const newRight = h(condition, n => n - 1, right)
            return _maxArea.bind(null, left, newRight, max)
        }

        const condition = n => height[n] > height[left] || n >= right
        const newLeft = h(condition, n => n + 1, left)
        return _maxArea.bind(null, newLeft, right, max)
    }

    return trampoline(_maxArea.bind(
        null, 0, height.length - 1, -Infinity)
    )
}

