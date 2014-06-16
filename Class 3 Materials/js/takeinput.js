/* JavaScript file for TakeInput.html */

/*
 * Now we can code, we should learn how to interact (with users).
 * JavaScript has Alert, Prompt and Confirm - let's experiment.
 * Other languages have INPUT, GET$, GET_BUFFER_CHAR methods for getting user input.
 * We can listen for every keystroke with onKeyUp() and onKeyDown() we won't yet..!
 *  
 */

var userChoice = prompt("Do you choose rock, paper or scissors?");

var myMessage = "My Choice : " + userChoice;

function cleverComputerProgram(user) {
	if(user == "rock") {
		return 'paper';
	}
	if(user == "paper") {
		return 'scissors';
	}
	if(user == "scissors") {
		return 'rock';
	}
	//we didn't recognise the user input : what can we do now?
}

if (cleverComputerProgram(userChoice) !== undefined) {
	var myOtherMessage = "\n\nComputer chooses " + cleverComputerProgram(userChoice);
	myOtherMessage += "\nI Are Intelligent !\nCleverComputerProgram wins again."
	myOtherMessage += "\n\nbut what happens if the input isn't 'paper', 'rock' or 'scissors'...?"
}

// can you fix this?
// how well can this be fixed?
// have you seen http://www.w3schools.com/js/js_popup.asp 'Confirm'
document.write(myMessage);
console.log(myOtherMessage);
