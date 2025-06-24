// src/main.js

// Import Bootstrap's CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'; // The 'as bootstrap' part is a common convention

console.log("Hello from main.js! Bootstrap CSS and JS should be loaded.");

// Example: If you want to use a Bootstrap tooltip, you'd initialize them
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))