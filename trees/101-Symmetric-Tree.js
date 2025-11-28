// ------------------- IMPORT / TreeNode CLASS -------------------
import { TreeNode } from "../utils/BinaryTree.js";

// ------------------- YOUR CODE (UNEDITED) -------------------
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    function recursive(left, right){
        // if(!left && !right) return true

        if(left && right){
            // console.log(left.val, right.val)
            // if(left.val !== right.val) return false
            if(left.left && right.right){
                if(left.left.val !== right.right.val){
                    return false
                }
            } 
            if(left.right && right.left){
                if(left.right.val !== right.left.val){
                    return false
                }
            }

            return recursive(left.left, right.right) && recursive(left.right, right.left)  
        }else{
            if(!left && !right){
                return true
            }
            return false
        }
    }

    if(root.left && root.right && root.left.val !== root.right.val){
        return false
    }else{
        return recursive(root.left,root.right)
    }
};

// ------------------- TESTING HELPER -------------------
function testCase(name, root) {
    console.log("\n====== " + name + " ======");
    try {
        console.log("Result:", isSymmetric(root));
    } catch (e) {
        console.log("Error:", e.message);
    }
}

// ------------------- TEST TREES -------------------

// SYMMETRIC TREE
const t1 = new TreeNode(1);
t1.left = new TreeNode(2);
t1.right = new TreeNode(2);
t1.left.left = new TreeNode(3);
t1.left.right = new TreeNode(4);
t1.right.left = new TreeNode(4);
t1.right.right = new TreeNode(3);

// NOT SYMMETRIC
const t2 = new TreeNode(1);
t2.left = new TreeNode(2);
t2.right = new TreeNode(2);
t2.left.right = new TreeNode(3);
t2.right.right = new TreeNode(3);

// SMALL SYMMETRIC
const t3 = new TreeNode(1);
t3.left = new TreeNode(2);
t3.right = new TreeNode(2);

// SINGLE NODE
const t4 = new TreeNode(1);

// EMPTY
const t5 = null;

// Test
const t6 = new TreeNode(1);
t6.left = new TreeNode(2);
t6.right = new TreeNode(2);
t6.left.right = new TreeNode(3);
t6.right.left = new TreeNode(3);

// ------------------- RUN TESTS -------------------
testCase("Symmetric (big)", t1);
testCase("Not symmetric", t2);
testCase("Symmetric (small)", t3);
testCase("Single node", t4);
testCase("Empty tree", t5);
testCase("Test", t6);
