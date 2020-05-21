// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3​

// function declaration
function fib(n) {

    // simple loop to check if the value of n is equal to one 
    if (n === 1) {
        return [0, 1]; // array returned if the value of n === 1
    }

    //move to this step if the value of n > 1
    else {
        var s = fib(n - 1);
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s;
    }
};

console.log(fib(3));