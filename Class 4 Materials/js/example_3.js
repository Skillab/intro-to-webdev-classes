/* JavaScript file for example_3.html */

// in production, you would never really do this trick this way ;)
var writeThis = '<p>HTML is for scaffolding of page parts.</p><p>CSS is for look, feel and style.</p><p>JavaScript is for adding logic and behaviours.</p><br /><p>Check out the jQuery Demos and  <span class="red">have</span> <span class="green">lots of</span> <span class="blue-background">fun !!!</span></p>'


function rememberThis() {
	
	var target = document.getElementById("writeToHere");
	target.innerHTML = writeThis;
}

console.log('onClick is used to tie the click event to our function "remeberThis()"');
 
