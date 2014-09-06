# Session 5
## Mentor’s Guide :
### Programming for APIs – calls and effect, the web is a program.

Welcome back! In this lab the students are being challenged to build a Transport Mapper web app. We will help them to use HTML and CSS along with their JavaScript skills to call Google Map and Transport for London APIs and manipulate their results with jQuery.

Examples for all the advanced techniques can be found at; [https://developers.google.com/maps/documentation/javascript/](https://developers.google.com/maps/documentation/javascript/)

### First Part : Google Map

You will want to add the API method `getCenter()` to myFunction like this `alert(map.getCenter().toString());`

*Try to focus your students towards looking it up in the Google documentation, but try not to let them flounder.*

### Second Part : Places-API

Places api can be found here: [https://developers.google.com/places/documentation/](https://developers.google.com/places/documentation/)

### Third Part : Placing a Marker

In Google Maps, markers are Overlays.To add a marker you should create a Latlng object from your desired location values and add the following line of code:
`var marker = new google.maps.Marker({ position: myLatlng, map: map, title:"Hello World!"  });`

Latlng objects are created like this:
`var myLatlng = new google.maps.LatLng(valLattitude,valLongitude);`

During this lab, as with last lab we will ONLY use CLASS for CSS selection, NEVER ID.
Id will be reserved for jQuery selection `$('#thisthinghere')`
KISS!