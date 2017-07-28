// package intersectionoftwoarrays

func intersection(nums1 []int, nums2 []int) []int {
	m := map[int]int{}

	for _, v := range nums1 {
		m[v] = 1
	}

	result := []int{}
	for _, v := range nums2 {
		count, ok := m[v]
		if ok && count == 1 {
			result = append(result, v)
			m[v] = 1 + count
		}
	}

	return result
}
