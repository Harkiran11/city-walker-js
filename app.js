// State Management
let landmarks = [];
let map;
let markers = {}; // Store marker objects by ID to manage them easily

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    initMap();
    loadFromStorage();
    setupEventListeners();
});

function initMap() {
    // REQUIREMENT F: Geolocation for initial view
    // Default to a central location if geo fails
    const defaultLocation = [43.6532, -79.3832]; // Toronto
    
    map = L.map('map').setView(defaultLocation, 13);

    // Using OpenStreetMap tiles (Requirement: Alternative to Google Maps)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // REQUIREMENT F: Browser Geolocation
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            map.setView([latitude, longitude], 15);
        });
    }

    // Map Click Event to populate coordinates
    map.on('click', (e) => {
        document.getElementById('lat').value = e.latlng.lat.toFixed(6);
        document.getElementById('lng').value = e.latlng.lng.toFixed(6);
    });
}