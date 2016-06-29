$( document ).ready(function() {
    console.log( "ready!" );
});
function initMap() {
        var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv, {
            center: {lat: 39.531728, lng:-84.994314 },
            zoom: 7
        });
      }