import { TreeNode } from "../utils/BinaryTree.js";


var isSameTree = function(p, q) {
    function recursive(p, q) {
        console.log("Comparing:", p?.val, q?.val);
        if (!p && !q)return true
        
        if (p && q) {

            if (!recursive(p.left, q.left)) return false;
            if (!recursive(p.right, q.right)) return false;

            if (p.val === q.val) {
                return true;
            } else {
                return false;
            }

        } else {
            // if one is null and the other is not
            if (p === null && q === null) return true;

            return false;
        }
    }

    return recursive(p, q);
};

// ------------------- TESTING SECTION -------------------

function testCase(name, p, q) {
    console.log("\n====== " + name + " ======");
    const result = isSameTree(p, q);
    console.log("Result:", result);
}

// ----- Test Case 1: equal trees -----
const a1 = new TreeNode(1);
a1.left = new TreeNode(2);
a1.right = new TreeNode(3);

const b1 = new TreeNode(1);
b1.left = new TreeNode(2);
b1.right = new TreeNode(3);

testCase("Both trees identical", a1, b1);

// ----- Test Case 2: different structure -----
const a2 = new TreeNode(1);
a2.left = new TreeNode(2);

const b2 = new TreeNode(1);
b2.right = new TreeNode(2);

testCase("Different shape", a2, b2);

// ----- Test Case 3: different values -----
const a3 = new TreeNode(1);
a3.left = new TreeNode(2);

const b3 = new TreeNode(1);
b3.left = new TreeNode(99);

testCase("Different values", a3, b3);

// ----- Test Case 4: both empty -----
testCase("Both are null", null, null);

// ----- Test Case 5: one empty -----
testCase("One null, one tree", a1, null);
