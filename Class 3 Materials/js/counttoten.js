/* JavaScript file for 1_CountToTen.html */

/*
 * Codecademy doesn't show the only way to declare JavaScript function.
 * We will now practice the other method.
 */


// anonymous function or 'function literal' style (it doesn't really have a name, the variable does...!) 
var addOne_v1 = function (number) {
	number = number + 1;
	return number;
};

// a function definition named properly (ie: named without being given to a variable) 
function addOne_v2 (number) {
	number = number + 1;
	return number;
}
			
			
var myMessage = "This Skillab exercise will test our function writing.\n" 
myMessage += "Here is our Codecademy style adder - " + addOne_v1(0); 

var myOtherMessage = "Here is the other Skillab style adder - " + addOne_v2(0); 

document.write(myMessage);
console.log(myOtherMessage);

/*

Exercise 1 - Count to ten. Try the messages out below, then show the Skillab method similarly. Then try to make just one function which outputs ten times, adding
one to the previous value each time. define it by either method, but call it countToTen() and it should start from a parameter 'start', which may
or may not be zero. Please write a 

myMessage += "Here is our adder 'counting' to Three - " + addOne_v1(0) + " " +  + addOne_v1(1) + " " +  + addOne_v1(2); 

myOtherMessage += "Here is our adder 'counting' to Three, again - " + addOne_v1(0) + " " +  + addOne_v1(addOne_v1(0)) + " " +  + addOne_v1(addOne_v1(addOne_v1(0))); 


*/
