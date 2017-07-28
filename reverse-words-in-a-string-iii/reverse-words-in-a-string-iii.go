package reversewordsinastringiii

import "strings"

func reverseWords(s string) string {
	parts := strings.Split(s, " ")

	newWords := []string{}
	for _, word := range parts {
		newWord := []rune{}
		for _, r := range word {
			newWord = append([]rune{r}, newWord...)
		}
		newWords = append(newWords, string(newWord))
	}

	return strings.Join(newWords, " ")
}
