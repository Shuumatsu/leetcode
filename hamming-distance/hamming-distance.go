package hammingdistance

func hammingDistance(x int, y int) int {
	results := 0
	exor := x ^ y

	for exor > 0 {
		if exor&1 == 1 {
			results++
		}
		exor = exor >> 1
	}

	return results
}
