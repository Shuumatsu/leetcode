const memoize = fn => {
    const cache = new Map()

    const memoized = (...args) => {
        const key = args.slice(0, 1)
        if (cache.has(key))
            return cache.get(key)
        const result = fn(...args)
        cache.set(key, result)
        return result
    }
    memoized.cache = cache

    return memoized
}

const trampoline = kont => {
    while (typeof kont === 'function')
        kont = kont()

    return kont.value
}

const log = (() => {
    let i = 0
    return (...args) => {
        if (i <= 200) {
            i++
            console.log(...args)
        }
    }
})()
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canPartition = nums => {
    const sum = nums.reduce((accu, val) => accu + val, 0)
    const half = sum / 2
    if (Math.floor(half) !== half)
        return false

    const _canPartition = (index, target, kont) => {
        log(index, target, kont)
        if (nums[index] === target)
            return kont.bind(null, { value: true })
        if (index === 0) {
            if (target === 0)
                return kont.bind(null, { value: true })
            return kont.bind(null, { value: false })
        }

        return _canPartition.bind(null, index - 1, target,
            res1 => _canPartition.bind(null, index - 1, target - nums[index],
                res2 => kont.bind(null, res1 || res2)
            )
        )
    }

    const id = r => r
    return trampoline(_canPartition(nums.length - 1, half, id))
}

// console.log(canPartition([1, 5, 11, 5]))
console.log(canPartition([100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100]))

// 1 2 3 4 5
// 1 | 2 3 4 5
// 1 2 | 3 4 5
// 1 0 | 3 4 5
// 0 | 2 3 4 5
// 0 2 | 3 4 5
// 0 0 | 3 4 5
