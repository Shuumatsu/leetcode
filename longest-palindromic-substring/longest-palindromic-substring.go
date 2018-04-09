package longestPalindromicSubstring

import (
	"math"
	"strings"
)

func expand(strs []string, index int, radius int) int {
	nextLeft := index - radius
	nextRight := index + radius

	if nextLeft >= 0 &&
		nextRight < len(strs) &&
		strs[nextLeft] == strs[nextRight] {
		return expand(strs, index, radius+1)
	}

	return radius
}

func encode(str string) []string {
	strs := strings.Split(str, "")

	return append(
		append(
			[]string{"#"},
			strings.Split(strings.Join(strs, "#"), "")...,
		),
		"#",
	)
}

func min(a, b int) int {
	if a < b {
		return a
	} else {
		return b
	}
}

func longestPalindrome(s string) string {
	encoded := encode(s)

	type results struct {
		Pos       int
		RightMost int
		Rs        []int
	}

	r := results{0, 0, []int{}}
	for i := range encoded {
		init := 1
		if i < r.RightMost {
			init = min(r.Rs[2*r.Pos-i], r.RightMost-i+1)
		}

		radius := expand(encoded, i, init)
		right := i + radius - 1

		if right > r.RightMost {
			r = results{RightMost: right, Pos: i, Rs: append(r.Rs, radius)}
		} else {
			r.Rs = append(r.Rs, radius)
		}
	}

	type position struct {
		Diameter, Index int
	}

	p := position{0, 0}
	for i, _d := range r.Rs {
		d := _d - 1
		if d > p.Diameter {
			p = position{d, i}
		}
	}

	radius := (float64(p.Diameter) - 1) / 2
	rawIndex := (float64(p.Index) - 1) / 2

	start := int(
		math.Ceil(rawIndex - radius),
	)
	end := int(
		math.Floor(rawIndex+radius) + 1,
	)
	return s[start:end]
}
