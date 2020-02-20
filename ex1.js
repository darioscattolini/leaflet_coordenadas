const barcelonaCenterMap = L.map('map').setView([41.387, 2.17], 16);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZHNjYXR0b2xpbmkiLCJhIjoiY2s2dW93b3JmMGIxODNnbzNkM3I0bW9ocSJ9.1qz7SprOUUh2A154p75psA'
}).addTo(barcelonaCenterMap);

var centfocsMarker = L.marker([41.387, 2.166]).addTo(barcelonaCenterMap);