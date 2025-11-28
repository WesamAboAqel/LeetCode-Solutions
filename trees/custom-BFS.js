import { TreeNode } from "../utils/BinaryTree.js";

const root = new TreeNode(1)
const second = new TreeNode(2)
const third = new TreeNode(3)
const fourth = new TreeNode(4)
const fifth = new TreeNode(5)

root.left = second
root.right = third
second.left = fourth
second.right = fifth

function BFS(root){
    if (!root) return

    let queue = [root]

    while(queue.length > 0){
        if(queue[0].left) queue.push(queue[0].left)
        if(queue[0].right) queue.push(queue[0].right)
        console.log(queue.shift().val)
    }
}

BFS(root)