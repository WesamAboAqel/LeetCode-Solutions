// ------------------- YOUR SOLUTION -------------------
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    function recursive() {
        if (s.length == 0) return;
        let letter = s.pop();
        console.log("Popped:", letter);
        recursive();
        s.unshift(letter);
    }

    return recursive();
};


// ------------------- TESTING SECTION -------------------

// Utility to format arrays nicely
function test(inputArr) {
    const arr = [...inputArr]; // make a copy so your original isn't changed
    console.log("\nInput:", arr);

    reverseString(arr);

    console.log("Output:", arr);
}

// Add as many tests as you want here:
test(["h","e","l","l","o"]);
test(["H","a","n","n","a","h"]);
test(["a"]);
test([]);
test(["r","e","c","u","r","s","i","o","n"]);

