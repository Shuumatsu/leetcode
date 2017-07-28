package numbercomplement

func findComplement(num int) int {
	result := 0

	for i := 0; num > 0; i++ {
		flag := num & 1
		flag = flag ^ 1
		result += flag * int(math.Pow(2, float64(i)))
		num = num >> 1
	}

	return result
}
