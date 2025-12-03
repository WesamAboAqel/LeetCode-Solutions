import { MinHeap } from "../utils/minHeap.js";

// Test 1 — Basic unordered array
// const h1 = new MinHeap();
// h1.heapify([5, 3, 8, 1, 2]);

// console.log(h1.heap);  
// expected a valid min-heap, smallest (1) at index 0
// one valid heap: [1,2,8,5,3]

// console.log("---------")

// Test 2 — Already a heap
// const h2 = new MinHeap();
// h2.heapify([1, 3, 2, 7, 8, 5]);

// console.log(h2.heap);
// expected: array remains a valid min-heap

// console.log("---------")

// Test 3 — Reverse sorted array
const h3 = new MinHeap();
h3.heapify([9, 8, 7, 6, 5, 4, 3]);

console.log(h3.heap);
// expected: root must be 3 (smallest value)
// example valid heap: [3,5,4,6,8,9,7]


// console.log("---------")

// Test 4 — All identical values
// const h4 = new MinHeap();
// h4.heapify([5, 5, 5, 5, 5]);

// console.log(h4.heap);
// expected: [5,5,5,5,5]

// console.log("---------")

// Test 5 — One element
// const h5 = new MinHeap();
// h5.heapify([42]);

// console.log(h5.heap);
// expected: [42]

// console.log("---------")

// Test 6 — Empty array
// const h6 = new MinHeap();
// h6.heapify([]);

// console.log(h6.heap);
// expected: []

// console.log("---------")

// Test 7 — heapify + pop interaction
// const h7 = new MinHeap();
// h7.heapify([9, 4, 7, 1, 3]);

// console.log(h7.pop());  
// expected: 1  (smallest)

// console.log(h7.heap);
// expected: valid min-heap after pop
