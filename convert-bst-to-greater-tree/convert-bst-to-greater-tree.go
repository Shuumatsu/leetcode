package convertbsttogreatertree

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func convertBST(root *TreeNode) *TreeNode {
	sum := 0
	var search func(*TreeNode) *TreeNode
	search = func(node *TreeNode) *TreeNode {
		if node == nil {
			return nil
		}

		newNode := &TreeNode{}
		if node.Right != nil {
			newNode.Right = search(node.Right)
		}
		sum += node.Val
		newNode.Val = sum
		if node.Left != nil {
			newNode.Left = search(node.Left)
		}

		return newNode
	}

	return search(root)
}
