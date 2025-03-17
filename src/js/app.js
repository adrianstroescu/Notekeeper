const currentYear = new Date().getFullYear();
const currentHours = new Date().getHours();
const currentMinutes = new Date().getMinutes();
const currentSeconds = new Date().getSeconds();

const yearNow = `${currentYear}`;
document.querySelector("[data-current-year]").textContent = yearNow;

const currentTime = `TIME: ${currentHours}:${currentMinutes}:${currentSeconds}`;
document.querySelector('[data-current-clock]').textContent = currentTime

'use strict';


// Module import 

import { addEventOnElements, getGreetingMsg } from "./utils.js"; 

// Toggle sidebar is small

const $sidebar = document.querySelector('[data-sidebar]');
const $sidebarTogglers = document.querySelectorAll('[data-sidebar-toggler]');
const $overlay = document.querySelector('[data-sidebar-overlay]');

addEventOnElements($sidebarTogglers, 'click', function() {
    $sidebar.classList.toggle('active');
    $overlay.classList.toggle('active');
});


const $greetElem = document.querySelector('[data-greeting]');
const currentHour = new Date().getHours();
$greetElem.textContent = getGreetingMsg(currentHour);