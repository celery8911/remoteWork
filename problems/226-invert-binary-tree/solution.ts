/**
 * Definition for a binary tree node.
 */
export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val: number, left: TreeNode | null = null, right: TreeNode | null = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * Inverts a binary tree by swapping left and right children recursively.
 */
export function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) {
    return null;
  }

  const leftInverted = invertTree(root.left);
  const rightInverted = invertTree(root.right);

  root.left = rightInverted;
  root.right = leftInverted;

  return root;
}

// Time complexity: O(n) where n is the number of nodes in the tree.
// Space complexity: O(h) where h is the height of the tree due to recursion stack.
