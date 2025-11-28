import { TreeNode } from "../utils/BinaryTree.js";



var isSubtree = function(root, subRoot) {
    function checkTree(node, subNode){
        if(!node && !subNode) return true
        if(!node || !subNode) return false
        if(node.val === subNode.val){
            return checkTree(node.left, subNode.left) && checkTree(node.right, subNode.right)
        }else{
            return false
        }
        
    }

    function treeTraversal(node, subNode){
        if(!node) return false
        
        
        if(node.val === subNode.val){
            if(checkTree(node,subNode)) return true
        }

        return treeTraversal(node.left,subNode) || treeTraversal(node.right,subNode)
        
        
    }

    return treeTraversal(root,subRoot)
};


// ------------------- TESTING UTIL -------------------
function testCase(name, root, subRoot) {
    console.log("\n========== " + name + " ==========");
    try {
        const res = isSubtree(root, subRoot);
        console.log("Result:", res);
    } catch (err) {
        console.log("Error:", err);
    }
}

function dumpTree(label, root) {
    console.log(label + ":", JSON.stringify(root, null, 2));
}

// ------------------- TEST TREES -------------------

// Test 1: Example from LeetCode
// root = [3,4,5,1,2], subRoot = [4,1,2]
const r1 = new TreeNode(3);
r1.left = new TreeNode(4);
r1.right = new TreeNode(5);
r1.left.left = new TreeNode(1);
r1.left.right = new TreeNode(2);

const s1 = new TreeNode(4);
s1.left = new TreeNode(1);
s1.right = new TreeNode(2);

// Test 2: NOT subtree
// root = [3,4,5,1,2,null,null,null,null,0]
const r2 = new TreeNode(3);
r2.left = new TreeNode(4);
r2.right = new TreeNode(5);
r2.left.left = new TreeNode(1);
r2.left.right = new TreeNode(2);
r2.left.right.left = new TreeNode(0);

const s2 = new TreeNode(4);
s2.left = new TreeNode(1);
s2.right = new TreeNode(2);

// Test 3: Identical trees (should be true)
const r3 = new TreeNode(1);
r3.left = new TreeNode(2);
r3.right = new TreeNode(3);

const s3 = new TreeNode(1);
s3.left = new TreeNode(2);
s3.right = new TreeNode(3);

// Test 4: Subtree deeper down
const r4 = new TreeNode(1);
r4.left = new TreeNode(1);
r4.left.left = new TreeNode(1);

const s4 = new TreeNode(1);

// Test 5
const root = new TreeNode(1);
root.left = new TreeNode(1);

const subRoot = new TreeNode(1);

// Add to your tests
// testCase("Custom Test: [1,1] contains [1]", root, subRoot);


// ------------------- RUN TESTS -------------------
testCase("Example 1: Should be TRUE", r1, s1);
// testCase("Example 2: Should be FALSE", r2, s2);
// testCase("Identical Trees", r3, s3);
// testCase("Single value subtree", r4, s4);