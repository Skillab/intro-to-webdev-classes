/* JavaScript file for example_2.html */

var pickOne = document.getElementById("pick_1");
var pickTwo = document.getElementById("pick_2");
var pickThree = document.getElementById("pick_3");

var showOne = document.getElementById("item_1");
var showTwo = document.getElementById("item_2");
var showThree = document.getElementById("item_5");

function updateSelections(which) {
	
	switch(which) {
		case 1:
			showOne.innerHTML = pickOne.options[pickOne.selectedIndex].value;
			break;
		case 2:
			showTwo.innerHTML = pickTwo.options[pickTwo.selectedIndex].value;
			break;
		case 3:
			showThree.innerHTML = pickThree.options[pickThree.selectedIndex].value;
			break;
	}
		
}

console.log('to get this function to run, the <select> in the HTML page was given an onChange value; it was given the name of our update function.');
 
