import assert from 'node:assert/strict';
import { invertTree, TreeNode } from './solution';

function buildTree(values: Array<number | null>): TreeNode | null {
  if (values.length === 0 || values[0] === null) {
    return null;
  }

  const root = new TreeNode(values[0]);
  const queue: TreeNode[] = [root];
  let index = 1;

  while (queue.length > 0 && index < values.length) {
    const current = queue.shift();
    if (!current) {
      continue;
    }

    const leftValue = values[index];
    index += 1;
    if (leftValue !== undefined) {
      if (leftValue !== null) {
        current.left = new TreeNode(leftValue);
        queue.push(current.left);
      }
    }

    const rightValue = values[index];
    index += 1;
    if (rightValue !== undefined) {
      if (rightValue !== null) {
        current.right = new TreeNode(rightValue);
        queue.push(current.right);
      }
    }
  }

  return root;
}

function treeToLevelOrder(root: TreeNode | null): Array<number | null> {
  if (!root) {
    return [];
  }

  const result: Array<number | null> = [];
  const queue: Array<TreeNode | null> = [root];

  while (queue.length > 0) {
    const node = queue.shift();
    if (node === null) {
      result.push(null);
      continue;
    }

    result.push(node.val);
    queue.push(node.left);
    queue.push(node.right);
  }

  while (result.length > 0 && result[result.length - 1] === null) {
    result.pop();
  }

  return result;
}

function runTest(name: string, input: Array<number | null>, expected: Array<number | null>): void {
  const tree = buildTree(input);
  const inverted = invertTree(tree);
  const result = treeToLevelOrder(inverted);
  assert.deepStrictEqual(result, expected, `${name} failed`);
  console.log(`✓ ${name}`);
}

runTest('handles empty tree', [], []);
runTest('handles single node', [1], [1]);
runTest('handles left-only tree', [1, 2, null, 3], [1, null, 2, null, 3]);
runTest('handles right-only tree', [1, null, 2, null, 3], [1, 2, null, 3]);
runTest('handles balanced tree', [4, 2, 7, 1, 3, 6, 9], [4, 7, 2, 9, 6, 3, 1]);
