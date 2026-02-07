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

// --- Core Logic ---

async function handleFormSubmit(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const desc = document.getElementById('description').value;
    const lat = parseFloat(document.getElementById('lat').value);
    const lng = parseFloat(document.getElementById('lng').value);
    const imageFile = document.getElementById('image').files[0];

    // REQUIREMENT A: Store image in memory (Base64)
    // Intentionally not handling error here first for Git history purposes (see below)
    const imageBase64 = await convertToBase64(imageFile);

    const newLandmark = {
        id: Date.now(), // Unique ID
        title,
        description: desc,
        lat,
        lng,
        image: imageBase64
    };

    landmarks.push(newLandmark);
    saveToStorage();
    addMarkerToMap(newLandmark);
    renderList();
    
    // Reset form
    e.target.reset();
}

// Helper to convert file to Base64 string
function convertToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
        reader.readAsDataURL(file);
    });
}

function addMarkerToMap(landmark) {
    // REQUIREMENT D: Interactive Map Marker
    const marker = L.marker([landmark.lat, landmark.lng]).addTo(map);
    
    // Bind Popup content
    const popupContent = `
        <div class="popup-content">
            <strong>${landmark.title}</strong><br>
            <p>${landmark.description}</p>
            <img src="${landmark.image}" class="popup-img" alt="${landmark.title}">
        </div>
    `;
    
    marker.bindPopup(popupContent);
    markers[landmark.id] = marker; // Store reference
}

// REQUIREMENT F: Delete Landmark
window.deleteLandmark = function(id) {
    // Remove from array
    landmarks = landmarks.filter(lm => lm.id !== id);
    
    // Remove from Map
    if (markers[id]) {
        map.removeLayer(markers[id]);
        delete markers[id];
    }

    saveToStorage();
    renderList();
}

// REQUIREMENT F: Persistence using localStorage
function saveToStorage() {
    localStorage.setItem('tourLandmarks', JSON.stringify(landmarks));
}

function loadFromStorage() {
    const data = localStorage.getItem('tourLandmarks');
    if (data) {
        landmarks = JSON.parse(data);
        landmarks.forEach(lm => {
            addMarkerToMap(lm);
        });
        renderList();
    }
}