function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOption = {
        center: new google.maps.LatLng(18.6516598, 97.6683007),
        zoom: 12
    }
    var map = new google.maps.Map(mapCanvas, mapOption);
}