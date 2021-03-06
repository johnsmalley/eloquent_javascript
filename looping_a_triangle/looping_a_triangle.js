/*
This exercises comes from Eloquent JavaScript http://eloquentjavascript.net/

Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
It may be useful to know that you can find the length of a string by writing .length after it.

var abc = "abc";
console.log(abc.length);
// → 3
*/

for(var string = "#"; string.length < 8; string += "#") {
	console.log(string);
}


