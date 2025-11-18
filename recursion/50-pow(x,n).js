/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    function pow(x,n){
        // console.log(x,n)
        if(n == 0){
            return 1
        }if(n > 0){
            return x * pow(x,n-1)
        }else if(n < 0){
            // console.log(1 / (x * pow(x,n+1)))
            return (1 / x) * pow(x,n+1)
        }
        
    }

    return pow(x,n)
};

// ------------------ TESTS ------------------
console.log("myPow(2, -2) =", myPow(2, -2));      // expected 0.25
// console.log("myPow(2, 10) =", myPow(2, 10));      // expected 1024
// console.log("myPow(3, 3)  =", myPow(3, 3));       // expected 27
// console.log("myPow(5, 0)  =", myPow(5, 0));       // expected 1
// console.log("myPow(2, -1) =", myPow(2, -1));      // expected 0.5
// console.log("myPow(0.5, 3) =", myPow(0.5, 3));    // expected 0.125
