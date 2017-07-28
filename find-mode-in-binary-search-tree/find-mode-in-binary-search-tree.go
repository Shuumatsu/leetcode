package findmodeinbinarysearchtree

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

var modes []int
var modesCount int
var maxCount int
var currentVal int
var currentCount int

func handleValue(node *TreeNode) {
	if node.Val != currentVal {
		currentVal = node.Val
		currentCount = 0
	}

	currentCount++
	if currentCount > maxCount {
		maxCount = currentCount
		modesCount = 0
		modes = []int{node.Val}
		return
	}
	if currentCount == maxCount {
		modesCount++
		modes = append(modes[:modesCount], node.Val)
	}
}

func findMode(root *TreeNode) []int {
	modes = []int{}
	modesCount = 0
	maxCount = 0
	currentVal = 0
	currentCount = 0

	node := root
	for node != nil {
		if node.Left == nil {
			handleValue(node)
			node = node.Right
			continue
		}

		prev := node.Left
		for prev.Right != nil && prev.Right != node {
			prev = prev.Right
		}

		if prev.Right == nil {
			prev.Right = node
			node = node.Left
			continue
		}

		handleValue(prev.Right)
		prev.Right = nil
		node = node.Right
	}

	return modes
}
