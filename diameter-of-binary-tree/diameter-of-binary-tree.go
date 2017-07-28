package diameterofbinarytree

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

var result int

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func deepSearch(node *TreeNode) int {
	if node == nil {
		return 0
	}

	left := deepSearch(node.Left)
	right := deepSearch(node.Right)

	result = max(result, left+right)

	return max(left, right) + 1
}

func diameterOfBinaryTree(root *TreeNode) int {
	result = 0
	deepSearch(root)
	return result
}
