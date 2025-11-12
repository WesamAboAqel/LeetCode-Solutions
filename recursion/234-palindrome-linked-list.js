import { ListNode } from '../utils/ListNode.js';

var isPalindrome = function(head) {
    let left = head
    function recursive(right=head){
        // console.log(right)
        
        if(right == null)return true
        // right = right.next
        
        const check = recursive(right.next)

        if(!check) return false

        // console.log(left.val,right.val)
        // console.log(left.val == right.val)
        if(left.val == right.val){
            left = left.next
            return true
        }else{
            return false
        }

        

    }
    return recursive()
};

const head = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))));
console.log(isPalindrome(head));