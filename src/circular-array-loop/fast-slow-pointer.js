/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Just think it as finding a loop in Linkedlist, except that loops with only 1 element do not count.
// Use a slow and fast pointer, slow pointer moves 1 step a time while fast pointer moves 2 steps a time.
// If there is a loop (fast == slow), we return true, else if we meet element with different directions, then the search fail, we set all elements along the way to 0.
// Because 0 is fail for sure so when later search meet 0 we know the search will fail.
const circularArrayLoop = nums => {
  const length = nums.length
  if (length <= 1) return false

  const normalizeIndex = i => i < 0 ? length + i : i % length

  class Pointer {
    index = 0

    get value() {
      return nums[this.index]
    }

    onStep() {
      const nextIndex = normalizeIndex(this.value + this.index)
      this.index = nextIndex
    }
  }

  class FastPointer extends Pointer {
    move() {
      this.oneStep()
      this.oneStep()
    }
  }

  class SlowPointer extends Pointer {
    move() {
      this.oneStep()
    }
  }

  let fast = 0, slow = 0


}