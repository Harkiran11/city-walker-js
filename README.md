# City Walker - Interactive Tour Creator 🗺️

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Leaflet](https://img.shields.io/badge/Leaflet-199900?style=for-the-badge&logo=Leaflet&logoColor=white)

A Vanilla JavaScript Single Page Application (SPA) that allows users to create, manage, and visualize custom walking tours. This project demonstrates core frontend competencies including DOM manipulation, the Geolocation API, and client-side data persistence without external frameworks.

## 🚀 Live Demo
[**Click here to view the live application**](https://YOUR_USERNAME.github.io/city-walker-js/) 

## 📸 Screenshots
![App Screenshot](./screenshot.png)

## ✨ Key Features

* **Geolocation Integration:** utilizes the browser's Navigator API to center the map on the user's real-time position.
* **Interactive Mapping:** Built with **Leaflet.js** and **OpenStreetMap** for rendering tiles, custom markers, and dynamic popups.
* **Client-Side Persistence:** Uses `localStorage` to save tour data (images, text, coordinates), ensuring data survives page reloads without a backend database.
* **Image Handling:** Implements `FileReader` API to convert uploaded images to Base64 strings for in-memory storage.
* **CRUD Operations:** Full Create, Read, and Delete capabilities for map markers and list items.
* **Responsive Design:** CSS Flexbox architecture ensures seamless usability across mobile, tablet, and desktop devices.

## 🛠️ Technical Implementation

This project was built to master the fundamentals of modern web development:
* **No Frameworks:** Built entirely in Vanilla JS to understand the lifecycle of DOM elements and state management.
* **Asynchronous JavaScript:** Utilizes Promises and Async/Await for handling file uploads and coordinate retrieval.
* **Event-Driven Architecture:** extensive use of EventListeners for user interactions and map state updates.

## 📦 Installation & Setup

1.  Clone the repository:
    ```bash
    git clone https://github.com/Harkiran11/city-walker-js.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd city-walker-js
    ```
3.  Open `index.html` in your preferred browser.

## 📝 Learning Outcomes
This project focuses on the "Model-View" separation of concerns within a simple application structure, handling complex user inputs (files, coordinates, text), and creating a synchronized UI where list actions update the map state and vice-versa.
