package averageoflevelsinbinarytree

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func averageOfLevels(root *TreeNode) []float64 {
	if root == nil {
		return []float64{}
	}
	result := []float64{float64(root.Val)}

	queue := []*TreeNode{}
	if root.Left != nil {
		queue = append(queue, root.Left)
	}
	if root.Right != nil {
		queue = append(queue, root.Right)
	}

	for len(queue) > 0 {
		newQueue := []*TreeNode{}
		sumThisLevel := 0
		for _, node := range queue {
			sumThisLevel += node.Val
			if node.Left != nil {
				newQueue = append(newQueue, node.Left)
			}
			if node.Right != nil {
				newQueue = append(newQueue, node.Right)
			}
		}

		result = append(result, float64(sumThisLevel)/float64(len(queue)))
		queue = newQueue
	}

	return result
}
