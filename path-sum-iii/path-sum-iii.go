package pathsumiii

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func pathSum(root *TreeNode, sum int) int {
	if root == nil {
		return 0
	}

	var aux func(*TreeNode, int) int
	aux = func(root *TreeNode, need int) int {
		if root == nil {
			return 0
		}

		match := 0
		if root.Val == need {
			match = 1
		}

		return aux(root.Left, need-root.Val) + aux(root.Right, need-root.Val) + match
	}

	return aux(root, sum) + pathSum(root.Left, sum) + pathSum(root.Right, sum)
}
