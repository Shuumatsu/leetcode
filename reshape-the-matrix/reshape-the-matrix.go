package reshapethematrix

func matrixReshape(nums [][]int, r int, c int) [][]int {
	count := len(nums) * len(nums[0])
	if count != r*c {
		return nums
	}

	result := [][]int{}
	for i := 0; i < r; i++ {
		result = append(result, []int{})
	}

	i, j := 0, 0
	for _, row := range nums {
		for _, n := range row {
			result[i] = append(result[i], n)
			j++
			if j == c {
				j = 0
				i++
			}
		}
	}

	return result
}
