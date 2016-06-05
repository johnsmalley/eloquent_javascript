/*
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
*/
// my solution

// ask the user for the grid size
var size = Number(prompt("Enter grid size", "8"));

// this is the dark color symbol on the board
var symbol = "#";

// where the board string is stored
board = "";

// creating the board
for(var row = 0; row < size; row++) {
  
  // make each row
  for (var column = 0; column < size; column++) {
  	// inserts and flips the symbols
  	if (symbol === "#") {
  		symbol = " ";
  		board += symbol;
  	} else {
  		symbol = "#";
  		board += symbol;
  	}
  }

  // if even size board, next row needs symbols flipped
  if (size % 2 === 0) {
  	if (symbol === "#") {
  		symbol = " ";
  	} else {
  		symbol = "#";
  	}
  }

  // creates new lines
  board += "\n";
}

// prints board
console.log(board);


// solution from Eloquent JavaScript
var size = 8;

var board = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);
