/* Operators (for things) */

/*
 * All of the statements in this file should evaluate to 'true'.
 * You should replace the ???s with an operator (<, >, ==, <>, so that JavaScript will output only 'true' in it's reponses.
 * Look in the console's output and check for errors when replacing the ???s
 */

 
var operator_1 = 10 ??? 5;
var operator_6 = 10 ??? (5 + 5);
var operator_7 = 10 == (5 ??? 5);
var operator_8 = (10 - 5) ??? 5;
var operator_10 = 10 ??? 5;
var operator_2 = (10 ??? 8) < 5;
var operator_3 = (10 + 8) ??? 5;
var operator_5 = 10 ??? 10;
var operator_4 = "Kitten".length ??? 5;
var operator_9 = "high" + " five" ??? "high five";

 
 
 
document.write("My ten operator statements were all...");
var output = operator_1 + " and\n";
output += operator_2 + " and\n";
output += operator_3 + " and\n";
output += operator_4 + " and\n";
output += operator_5 + " and\n";
output += operator_6 + " and\n";
output += operator_7 + " and\n";
output += operator_8 + " and\n";
output += operator_9 + " and\n";
output += operator_10 + " !!";
console.log(output);