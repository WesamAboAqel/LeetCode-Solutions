import { TreeNode } from "../utils/BinaryTree.js";

const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)

const root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.left.left = new TreeNode(3);
root2.left.left.left = new TreeNode(4);

const root3 = new TreeNode(1);
root3.right = new TreeNode(2);
root3.right.right = new TreeNode(3);
root3.right.right.right = new TreeNode(4);

const root4 = new TreeNode(1);
root4.left = new TreeNode(2);
root4.right = new TreeNode(3);
root4.left.left = new TreeNode(4);
root4.left.right = new TreeNode(5);
root4.right.left = new TreeNode(6);
root4.right.right = new TreeNode(7);

const root5 = new TreeNode(1);
root5.left = new TreeNode(2);
root5.right = new TreeNode(3);
root5.right.right = new TreeNode(4);
root5.right.right.right = new TreeNode(5);


function maxDepth(node,depth =1){
    if(!node) return depth

    const leftValue = maxDepth(node.left,depth + 1) ?? 0
    const rightValue = maxDepth(node.right,depth + 1) ?? 0

    return Math.max(leftValue,rightValue)
}

console.log(maxDepth(root))
console.log(maxDepth(root2))
console.log(maxDepth(root3))
console.log(maxDepth(root4))
console.log(maxDepth(root5))