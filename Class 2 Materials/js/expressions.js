/* JavaScript file for Expressions.html */

var myMessage = "Computers do math in expressions, like adding 7 to 5, "
var myOtherMessage = "7 + 5 = " + (7+5);

document.write(myMessage);
console.log(myOtherMessage);

var myMessage = "and operate on variables in statements like <br />myNewValue equals myOldValue plus 5."
var myOldValue = 1;
var myNewValue = 2;

var myOtherMessage = "myOldValue = " + myOldValue;
myOtherMessage += "\nmyNewValue = " + myNewValue;


//here's the assignment statement 
myNewValue = myOldValue + 5;

myOtherMessage += "\nand now ";
myOtherMessage += "\nmyNewValue = " + myNewValue;

document.write(myMessage);
console.log(myOtherMessage);
