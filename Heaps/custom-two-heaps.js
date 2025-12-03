import { TwoHeaps } from "../utils/TwoHeaps.js";


const th = new TwoHeaps();

console.log(th.insert(5));  // expected 5
console.log(th.insert(2));  // expected (2+5)/2 = 3.5
console.log(th.insert(10)); // expected 5
console.log(th.insert(7));  // expected (5+7)/2 = 6
console.log(th.insert(3));  // expected 5
console.log(th.insert(8));  // expected (5+6)/2 = 5.5
console.log(th.insert(1));  // expected 5
console.log(th.insert(6));  // expected (5+6)/2 = 5.5