const successCallback = (position) => {
  console.log(position);
};

const errorCallback = (error) => {
  console.error(error);
};

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 1.3521, lng: 103.8198 },
    zoom: 15,
  });
}
