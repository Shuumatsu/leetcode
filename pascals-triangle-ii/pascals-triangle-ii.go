package pascalstriangleii

func getRow(rowIndex int) []int {
	if rowIndex == 0 {
		return []int{1}
	}
	if rowIndex == 1 {
		return []int{1, 1}
	}

	arr := []int{1, 1}
	for i := 2; i <= rowIndex; i++ {
		cache := append([]int(nil), arr...)
		arr = []int{1}
		for j := 1; j < i; j++ {
			arr = append(arr, cache[j-1]+cache[j])
		}
		arr = append(arr, 1)
	}

	return arr
}
