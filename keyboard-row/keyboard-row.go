package keyboardrow

import "unicode"

func check(r rune) int {
	r = unicode.ToLower(r)
	var thisTurn int
	switch r {
	case 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p':
		thisTurn = 1
	case 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l':
		thisTurn = 2
	default:
		thisTurn = 3
	}
	return thisTurn
}

func findWords(words []string) []string {
	result := []string{}

	for _, word := range words {
		flag := true
		lastTurn := check(rune(word[0]))
		for _, r := range word[1:] {
			thisTurn := check(r)
			if thisTurn != lastTurn {
				flag = false
				break
			}
		}
		if flag {
			result = append(result, word)
		}
	}

	return result
}
