/* JavaScript file for 4_Pets.html */

/*
 * We will make another simple guessing game.
 * Pick a pet fact, and ask about it.
 *  
 * How much will you need to ask to be sure of guessing the correct pet.
 */
 
var pets = ["cat", "dog", "mouse", "budgie", "aligator", "wombat", "billie-goat"];
var foods = ["fish", "meat", "cheese", "seed", "everything", "wom", "absolutely anything at all"];

var myMessage = '';
 
for(var n = 0; n < pets.length; n++) {
	myMessage += pets[n] + "s eat " + foods[n] + "<br />";
}
document.write(myMessage);


var noises = ["mew", "bark", "squeak", "chirp", "snap", "wom", "bleat"];
var myOtherMessage = '';
 
for(var n = 0; n < pets.length; n++) {
	myOtherMessage += pets[n] + " go " + noises[n] + "\n";
}
console.log(myOtherMessage);

 // this exercise 