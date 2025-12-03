import { MinHeap } from "../utils/minHeap.js";

// Test 1 — Basic push sequence
const h = new MinHeap();

h.push(5);
h.push(3);
h.push(7);
h.push(1);

console.log(h.heap);  // expected a valid min-heap, example: [1,3,7,5]


// Test 2 — More pushes
const h2 = new MinHeap();

[10, 4, 15, 20, 0, 8].forEach(x => h2.push(x));

console.log(h2.heap);  // expected a valid min-heap, root must be 0

// Test 3 — Single pop
const h3 = new MinHeap();

[5, 3, 7, 1].forEach(x => h3.push(x));

console.log(h3.pop());  // expected 1
console.log(h3.heap);   // expected valid heap, root should be 3


// Test 4 — Pop multiple times
const h4 = new MinHeap();

[9, 5, 6, 2, 3].forEach(x => h4.push(x));

console.log(h4.pop());  // expected 2
console.log(h4.pop());  // expected 3
console.log(h4.pop());  // expected 5

console.log(h4.heap);   // heap must still be valid


// Test 5 — Push → Pop → Push → Pop mix
const h5 = new MinHeap();

h5.push(10);
h5.push(4);
h5.push(7);

console.log(h5.pop());  // expected 4

h5.push(3);
h5.push(8);

console.log(h5.pop());  // expected 3
console.log(h5.pop());  // expected 7


// Test 6 — Pop from heap of size 1
const h6 = new MinHeap();

h6.push(42);
console.log(h6.pop());  // expected 42
console.log(h6.heap);   // expected []


// Test 7 — Pop from empty heap
const h7 = new MinHeap();
console.log(h7.pop());  // your chosen behavior