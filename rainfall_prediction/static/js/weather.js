// Ініціалізація карти
var map = L.map('map').setView([49.0, 32.0], 5); // Координати України

// Додавання базового шару (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Завантажте GeoJSON файл
fetch("/static/geojson/Ukraine-regions.json")
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        // Додайте GeoJSON до карти з стилем
        L.geoJSON(data, {
            style: function(feature) {
                return {
                    color: "#ff7800", // Колір контурів
                    weight: 2,        // Товщина контурів
                    fillColor: "#ffcc00", // Колір заливки
                    fillOpacity: 0.5 // Прозорість заливки
                };
            },
            onEachFeature: function(feature, layer) {
                if (feature.properties && feature.properties.NAME_1) {
                    // Додаємо мітку на карту
                    layer.bindPopup(feature.properties.NAME_1); // Виводимо назву області
                }
            }
        }).addTo(map);
    })
    .catch(error => {
        console.error("Error loading GeoJSON: ", error);
    });
