/**
 * @copyright codewithsadee 2023
 */

'use strict';


/**
 * Attaches an event listener to a collection of DOM elements.
 *
 * @param {Array<HTMLElement>} $elements - An array of DOM elements
 *   to attach the event listener to.
 * @param {string} eventType - The type of event to listen for (e.g.,
 *   'click', 'mouseover').
 * @param {Function} callback - The function to be executed when the
 *   event occurs.
 */


const addEventOnElements = function($elements, eventType, callback) {
    console.log($elements);
    $elements.forEach($element => $element.addEventListener(eventType, callback));
}


const getGreetingMsg = function(currentHour) {
const greeting =
currentHour < 5 ? 'Night':
currentHour < 12 ? 'Morning':
currentHour < 15 ? 'Noon':
currentHour < 17 ? 'Afternoon':
currentHour < 20 ? 'Evening':
'Night';

return `Good ${greeting},`;
}


export {
    addEventOnElements,
    getGreetingMsg
}
