package minimumdepthofbinarytree

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func minDepth(root *TreeNode) int {
	if root == nil {
		return 0
	}

	result := 0
	queue := []*TreeNode{root}
	for len(queue) > 0 {
		result++
		newQueue := []*TreeNode{}
		for _, node := range queue {
			if node.Left == nil {
				if node.Right == nil {
					return result
				}
				newQueue = append(newQueue, node.Right)
				continue
			}
			newQueue = append(newQueue, node.Left)
			if node.Right != nil {
				newQueue = append(newQueue, node.Right)
			}
		}
		queue = newQueue
	}

	return result
}
