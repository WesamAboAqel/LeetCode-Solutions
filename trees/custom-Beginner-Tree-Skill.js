import {TreeNode} from "../utils/BinaryTree.js"

const root = new TreeNode(1)
const second = new TreeNode(2)
const third = new TreeNode(3)
const fourth = new TreeNode(4)
const fifth = new TreeNode(5)

root.left = second
root.right = third
second.left = fourth
second.right = fifth


// console.log(JSON.stringify(root, null, 2))

function preOrder(node){
    if(!node) return
    console.log(node.val)
    preOrder(node.left)
    preOrder(node.right)
}

function inOrder(node){
    if(!node) return
    inOrder(node.left)
    console.log(node.val)
    
    inOrder(node.right)
}

function postOrder(node){
    if(!node)return

    
    postOrder(node.left)
    postOrder(node.right)
    console.log(node.val)
}


// preOrder(root)
// inOrder(root)
postOrder(root)