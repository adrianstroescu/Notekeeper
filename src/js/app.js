


const currentYear = new Date().getFullYear();
document.querySelector("[data-current-year]").textContent = currentYear;


'use strict';


// Module import 

import { addEventOnElements } from "./utils.js"; 

// Toggle sidebar is small

const $sidebar = document.querySelector('[data-sidebar]');
const $sidebarTogglers = document.querySelectorAll('[data-sidebar-toggler]');
const $overlay = document.querySelector('[data-sidebar-overlay]');

addEventOnElements($sidebarTogglers, 'click', function() {
    $sidebar.classList.toggle('active');
    $overlay.classList.toggle('active');


});