/* JavaScript file for Challenge.html */

/*
 * The challenge is to prepare and code a Transport Mapper.
 * Build out the functions below to fit your plan. 
 * 
 *
 */

 
// declare the variable map here, so that we can access it outside of the initialize function
var map;

function initialize() {
	
	var mapOptions = {
		center: new google.maps.LatLng(-34.397, 150.644),
		zoom: 8,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

}
 
 

function myFunction() {
	alert("Your Function doesn't do much yet..");
	alert("Now moving to London...");

	var map2Options = {
		center: new google.maps.LatLng(51.501364, -0.14189),
		zoom: 12,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	map = new google.maps.Map(document.getElementById("map_canvas"), map2Options);

} 
 
 
 
 
 
/*
 * If you want to use the jQuery Framework, add code between the lines below. 
 */
 
 
$( document ).ready(function() {
/* write code in here to use the jQuery Framework */

initialize();


  
/* finish your code befroe the following line */  
});
