package constructstringfrombinarytree

import (
	"strconv"
)

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func parseTree(t *TreeNode) []rune {
	runes := []rune{'('}
	runes = append(runes, ([]rune)(strconv.Itoa(t.Val))...)
	if t.Left == nil && t.Right == nil {
		return append(runes, ')')
	}

	if t.Left != nil {
		runes = append(runes, parseTree(t.Left)...)
	} else {
		runes = append(runes, '(', ')')
	}
	if t.Right != nil {
		runes = append(runes, parseTree(t.Right)...)
	}

	return append(runes, ')')
}

func tree2str(t *TreeNode) string {
	if t == nil {
		return ""
	}

	runes := ([]rune)(strconv.Itoa(t.Val))
	if t.Left == nil && t.Right == nil {
		return string(runes)
	}

	if t.Left != nil {
		runes = append(runes, parseTree(t.Left)...)
	} else {
		runes = append(runes, '(', ')')
	}
	if t.Right != nil {
		runes = append(runes, parseTree(t.Right)...)
	}

	return string(runes)
}
