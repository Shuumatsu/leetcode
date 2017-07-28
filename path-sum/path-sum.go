package pathsum

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

type patchedTreeNode struct {
	*TreeNode
	prevSum int
}

func hasPathSum(root *TreeNode, sum int) bool {
	if root == nil {
		return false
	}

	queue := []*patchedTreeNode{
		&patchedTreeNode{root, 0},
	}
	for len(queue) > 0 {
		newQueue := []*patchedTreeNode{}
		for _, node := range queue {
			nodeSum := node.prevSum + node.Val
			if nodeSum == sum && node.Left == nil && node.Right == nil {
				return true
			}
			if node.Left != nil {
				newQueue = append(newQueue, &patchedTreeNode{node.Left, nodeSum})
			}
			if node.Right != nil {
				newQueue = append(newQueue, &patchedTreeNode{node.Right, nodeSum})
			}
		}
		queue = newQueue
	}

	return false
}
