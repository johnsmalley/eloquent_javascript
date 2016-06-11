/*
This exercises comes from Eloquent JavaScript http://eloquentjavascript.net/
Flattening

Use the reduce method in combination with the concat method to “flatten” an
array of arrays into a single array that has all the elements of the input
arrays.

var arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
// → [1, 2, 3, 4, 5, 6]
*/

// my code
var arrays = [[1, 2, 3], [4, 5], [6]];

function flatten(arrays) {
	return arrays.reduce(function(array, element) {
		return array.concat(element);
	}, []);
}

console.log(flatten(arrays));

// Eloquent JavaScript exercise solution
var arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce(function(flat, current) {
  return flat.concat(current);
}, []));

// → [1, 2, 3, 4, 5, 6]