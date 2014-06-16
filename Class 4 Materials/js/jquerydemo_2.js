/* JavaScript file for jQuery-demo_1.html 
 *
 * You will write all of your JavaScript into the jQuery 
 * anonymous 'document.ready' function.
 * Any functions you define outside and above the jQuery 
 * 'document.ready' function will be usable in your code 
 * too.
 */




$( document ).ready(function() {

/* write code in here to use the jQuery Framework */
var countClicks = 0;

  $("#click-me").click(function( event ) {
	if(countClicks == 0) {
		alert("You clicked me!");
	}
	if(countClicks == 1) {
		alert("You clicked me again!");
		}
	if(countClicks == 2) {
		alert("You're quite serious about this 'clicking', aren't you :-)");
		$("#click-me").html('Don\'t Click Me Again!!');
		$("#click-me").css('color','red');	
		}
	if(countClicks == 3) {
		alert("I mean it!");
		$("#click-me").hide(2000);
		}
	countClicks++;
  });
  
  
/* finish your code befroe the following line */  
});