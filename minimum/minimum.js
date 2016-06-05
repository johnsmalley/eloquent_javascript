/*
This exercises comes from Eloquent JavaScript http://eloquentjavascript.net/

Minimum

The previous chapter introduced the standard function Math.min that returns its smallest argument. We can do that ourselves now. Write a function min that takes two arguments and returns their minimum.

// Your code here.

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
*/

// my solution
function min(x,y) {
  return x < y ? x : y;
}

// Eloquent JavaScript solution
function min(a, b) {
  if (a < b)
    return a;
  else
    return b;
}
