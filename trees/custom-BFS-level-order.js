import { TreeNode } from "../utils/BinaryTree.js";

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);




function logBFS(node){
    let BFSQueue = [root]
    let level = 1
    
    while(BFSQueue.length > 0){
        const levelSize = BFSQueue.length
        console.log("Level: ",level)
        for (let i = 0; i < levelSize; i++){
            const node = BFSQueue.shift()
            console.log(node.val)

            if(node.left) BFSQueue.push(node.left)
            if(node.right) BFSQueue.push(node.right)
        }
    level += 1
    }
    
}

logBFS(root)