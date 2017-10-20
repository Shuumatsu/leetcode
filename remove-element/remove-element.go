package removeelement

func removeElement(nums []int, val int) int {
	if nums == nil {
		return 0
	}

	old := len(nums)
	diff := 0
	for i := 0; i < len(nums); i++ {
		j := i - diff
		if nums[i] == val {
			diff++
			nums = append(nums[:j], nums[j+1:]...)
		}
	}

	return old - diff
}
