/* JavaScript file for Challenge.html */

/*
 * The challenge is to prepare and code a Transport Mapper.
 * Build out the functions below to fit your plan. 
 * 
 *
 */

 
// declare the variable map here, so that we can access it outside of the initialize function
var map;
var count = 0;
var myMarker = new Array();

function initialize() {
	
	// center is where the maps first draws itself: this is 
	var myMapLatlng = new google.maps.LatLng(51.501364, -0.14189);

	var mapOptions = {
		center: myMapLatlng,
		zoom: 12,
		// mapTypeID sets the map kind - TERRAIN, ROADMAP
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	// this is the line of code required to bild the initial map
	map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

}
 
 

function myFunction() {
	alert("Now adding a marker...");
	count++;
	// the form of a position latlng is 
	var myLatlng = new google.maps.LatLng(51.501364, -0.14189);

	var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
			draggable: true,
            title: 'Move me to your location!'
        });
		
	myMarker[count] = marker; 	

} 
 

function myOtherFunction() {
	marker = myMarker[count];
	alert("Now reading the marker...");

	// the form of a position latlng is 
	var myLat = marker.position.lat();
	var myLng = marker.position.lng();

	alert("Is at ( " + myLat + ", " + myLng + " ).");
	
} 
 
 
 
 
 
/*
 * If you want to use the jQuery Framework, add code between the lines below. 
 */
 
 
$( document ).ready(function() {
/* write code in here to use the jQuery Framework */

initialize();


  
/* finish your code befroe the following line */  
});
