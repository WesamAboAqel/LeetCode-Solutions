/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    
    const dummy = new ListNode(0, head)
    function recursive(node,val){
        if(!node){
            return null
        }
        console.log(node.val)
        if(node.val == val){
            node.next = recursive(node.next, val)
            return node.next
        }else{
            node.next = recursive(node.next, val)
            return node
        }
    }   

    return recursive(dummy.next, val)

};

// ------------------- Helper functions for testing -------------------

// Convert array → linked list
function buildList(arr) {
    let dummy = new ListNode(0);
    let curr = dummy;
    for (let value of arr) {
        curr.next = new ListNode(value);
        curr = curr.next;
    }
    return dummy.next;
}

// Print linked list nicely
function printList(head) {
    let out = [];
    while (head) {
        out.push(head.val);
        head = head.next;
    }
    return out;
}


// ------------------- TEST CASES -------------------
function test(arr, val) {
    console.log("\nInput List:", arr);
    console.log("Remove Value:", val);

    let head = buildList(arr);
    let result = removeElements(head, val);

    console.log("Output List:", printList(result));
}

// You can add as many tests as you want:
test([1,2,6,3,4,5,6], 6);   // expected: [1,2,3,4,5]
test([], 6);                // expected: []
test([7,7,7,7], 7);         // expected: []
test([1], 1);               // expected: []
test([1,2,3], 4);           // expected: [1,2,3]