import {Trie} from "../utils/Tries.js"

const trie = new Trie()

trie.insert("apple");
trie.insert("app");
trie.insert("ace");
trie.insert("bat");




// console.log(trie.check("ap"));     
// console.log(trie.check("bat"));    
// console.log(trie.check("bad"));

// console.log(trie.startsWith("ap"));    // true
// console.log(trie.startsWith("app"));   // true
// console.log(trie.startsWith("ace"));   // true
// console.log(trie.startsWith("b"));     // true
// console.log(trie.startsWith("ba"));    // true
// console.log(trie.startsWith("bat"));   // true

// console.log(trie.startsWith("bad"));   // false
// console.log(trie.startsWith("z"));     // false
// console.log(trie.startsWith("ca"));    // false


console.log(trie.delete("apple"))
console.log(trie.check("app"))
console.log(trie.check("apple"));  

