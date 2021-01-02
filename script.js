/*let url = "https://api.data.gov.sg/v1/transport/taxi-availability";

fetch(url)
.then(response => response.json()) 
.then(function(data){
  console.log(data);
});

var mymap = L.map('mapid').setView([51.505, -0.09], 13);*/

const successCallback = (position) => {
  console.log(position);
  var latitude = GeolocationCoordinates[4];
  var longitude = GeolocationCoordinates[5];
};

const errorCallback = (error) => {
  console.error(error);
};

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 1.3521, lng: 103.8198 },
    zoom: 20,
  });
}