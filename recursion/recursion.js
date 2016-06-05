/*
This exercises comes from Eloquent JavaScript http://eloquentjavascript.net/

We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to check whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

 Zero is even.

 One is odd.

 For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a number parameter and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

// Your code here.

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??
*/

// my code
function isEven(x) {
	if (x === 0) {
		return true;
	} else if (x === -1 || x === 1) {
		return false;
	} else {
		// if x is a negative value the use recursion with a positive value
		return x < -1 ? isEven(-x - 2) : isEven(x - 2);
	} 
}

console.log(isEven(50));
console.log(isEven(-50));
console.log(isEven(75));
console.log(isEven(-75));

// Eloquent JavaScript solution
function isEven(n) {
  if (n == 0)
    return true;
  else if (n == 1)
    return false;
  else if (n < 0)
    return isEven(-n);
  else
    return isEven(n - 2);
}
