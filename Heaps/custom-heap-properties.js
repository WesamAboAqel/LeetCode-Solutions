import { MinHeap } from "../utils/minHeap.js";

const h = new MinHeap();

// Parent tests
console.log(h.getParent(1));  // expected 0
console.log(h.getParent(2));  // expected 0
console.log(h.getParent(3));  // expected 1
console.log(h.getParent(4));  // expected 1
console.log(h.getParent(5));  // expected 2
console.log(h.getParent(6));  // expected 2

// Left child tests
console.log(h.getLeft(0));    // expected 1
console.log(h.getLeft(1));    // expected 3
console.log(h.getLeft(2));    // expected 5
console.log(h.getLeft(3));    // expected 7

// Right child tests
console.log(h.getRight(0));   // expected 2
console.log(h.getRight(1));   // expected 4
console.log(h.getRight(2));   // expected 6
console.log(h.getRight(3));   // expected 8
