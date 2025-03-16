/**
 * @copyright codewithsadee 2023
 */

'use strict';


const storedTheme = localStorage.getItem('theme')
const systemThemeIsdark = window.matchMedia('prefers-color-scheme:dark').matches;
const initialTheme = storedTheme ?? (systemThemeIsdark ? 'dark' : 'light');

document.documentElement.setAttribute('data-theme', initialTheme);