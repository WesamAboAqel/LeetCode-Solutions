// ------------------- YOUR SOLUTION -------------------
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  // write your logic here
  console.log("ransomNote:", ransomNote);
  console.log("magazine:", magazine);

  // let magazineArray = magazine.split("")
  let ransomNoteArray = ransomNote.split("");

  function recursive(magazine, ransomNoteArray) {
    if (ransomNoteArray.length == 0) {
      return true;
    }

    let ransomLetter = ransomNoteArray[0];
    const newMagazine = magazine.replace(ransomLetter, "");

    if (newMagazine !== magazine) {
      ransomNoteArray.shift();
      return recursive(newMagazine, ransomNoteArray);
    } else {
      return false;
    }
  }

  return recursive(magazine, ransomNoteArray);
  // return true/false
};

// ------------------- TESTING SECTION -------------------
function test(ransom, mag) {
  console.log("\n--- TEST ---");
  console.log("Input ransomNote:", ransom);
  console.log("Input magazine:", mag);

  const result = canConstruct(ransom, mag);
  console.log("Output:", result);
}

// Add tests here:
// test("a", "b");              // false
// test("aa", "ab");            // false
// test("aa", "aab");           // true
// test("abc", "cbad");         // true
// test("aaaa", "aaa");         // false
// test("", "anything");        // true
// test("hello", "hleolxx");    // true
