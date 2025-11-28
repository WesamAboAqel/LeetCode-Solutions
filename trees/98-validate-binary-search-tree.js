import { TreeNode } from "../utils/BinaryTree.js";



var isValidBST = function(root) {
    function recursion(node, min = -Infinity, max = Infinity){
        if(!node) return true

        let leftNode = true
        let rightNode = true

        if(node.left){
            
            if(node.left.val < node.val && node.left.val > min){
                leftNode = recursion(node.left,min,node.val)
            }else{
                leftNode = false
            }
        }
        if(node.right){
            if(node.right.val > node.val && node.right.val < max){
                rightNode = recursion(node.right,node.val,max)
            }else{
                rightNode = false
            }
        }

        return recursion(root)
    }
};

const root2 = new TreeNode(5);
root2.left = new TreeNode(1);
root2.right = new TreeNode(4);
root2.right.left = new TreeNode(3);
root2.right.right = new TreeNode(6);


const rootTest = new TreeNode(5);
rootTest.left = new TreeNode(4);
rootTest.right = new TreeNode(6);
rootTest.right.left = new TreeNode(3);
rootTest.right.right = new TreeNode(7);


// ------------ TESTING FUNCTION ------------
function test(name, root) {
    console.log(`\n===== TEST: ${name} =====`);
    console.log("Result:", isValidBST(root));
}

const root1 = new TreeNode(2);
root1.left = new TreeNode(1);
root1.right = new TreeNode(3);
// ------------ RUN TESTS ------------
test("Valid BST (should be true)", root1);
// test("Invalid BST (should be false)", root2);
// test("Invalid BST 2 (should be false)", root3);
// test("Invalid BST 2 (should be false)", rootTest);

// Invalid BST: [5,4,6,null,null,3,7]


// Expected output: false
// console.log("Testcase [5,4,6,null,null,3,7] =>", isValidBST(rootTest));