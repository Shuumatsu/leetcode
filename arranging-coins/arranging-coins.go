package arrangingcoins

func arrangeCoins(n int) int {
	i := 0
	for n > 0 {
		i++
		n -= i
	}
	if n < 0 {
		return i - 1
	}

	return i
}
