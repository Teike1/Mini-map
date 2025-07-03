let map = L.map('map').setView([52.37, 4.89], 13); // Start in Amsterdam

// Correcte OpenStreetMap-tiles
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap'
}).addTo(map);

// GPS Locatie
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    L.marker([lat, lng]).addTo(map)
      .bindPopup("Je bent hier").openPopup();
    map.setView([lat, lng], 15);
  }, function () {
    alert("GPS-locatie kon niet worden opgehaald.");
  });
}

// Simpele route-invoer
function planRoute() {
  const bestemming = document.getElementById("routeInput").value;
  alert("Navigatie naar: " + bestemming + " (functie volgt)");
}
