const successCallback = (position) => {
  console.log(position);
};

const errorCallback = (error) => {
  console.error(error);
};

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

let map;

function initMap() {
  var options = {
    center: { lat: 1.3339, lng: 103.7220 },
    zoom: 15
  }

  var map = new
  google.maps.Map(document.getElementById('map'), options);

  var marker = new google.maps.Marker({
    position: { lat: 1.3521, lng: 103.8198},
    map: map
  });

  addMarker({ lat:1.3339, lng: 103.7220 });

  function addMarker(coords){
    var marker = new google.maps.Marker({
      position : coords,
      map : map
    });
  }
}
