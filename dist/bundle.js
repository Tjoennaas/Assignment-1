/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/apiEndpoints.js":
/*!********************************!*\
  !*** ./src/js/apiEndpoints.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   apiEndpoints: () => (/* binding */ apiEndpoints)\n/* harmony export */ });\n\n       const apiEndpoints = {      \n               'people': 'https://swapi.dev/api/people/',\n               'films': 'https://swapi.dev/api/films/',\n               'planets': 'https://swapi.dev/api/planets/',\n               'starships': 'https://swapi.dev/api/starships/',\n         };\n\n\n         \n\n//# sourceURL=webpack://assignment_1/./src/js/apiEndpoints.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _apiEndpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiEndpoints */ \"./src/js/apiEndpoints.js\");\n/* harmony import */ var _recordImags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recordImags */ \"./src/js/recordImags.js\");\n/* harmony import */ var _records__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./records */ \"./src/js/records.js\");\n\n\n\n\n \n\n\n\n\n\n// Selecting all the buttons, to perform actions on each button.\nconst categoryButtons = document.querySelectorAll('.category__button')\ncategoryButtons.forEach(button =>{  \nbutton.addEventListener('click', async () => {  // The async will execute data from swapiAPI,when butons are activ.\n\n\nconst category = document.querySelector('.category');\nconst backButton = document.querySelector( '.backButton');\nconst contentContainer = document.querySelector('[data-to-show]');\n\n//Toggle visibility\ncategory.classList.add( 'hidden');\nbackButton.classList.remove('hidden');\ncontentContainer.classList.remove('hidden');\n\n\n// GetAttribute: retrieves the value of the data-target attribute from the clicked button.\n// The value is then used to look up the API endpoint.\nconst dataTarget= button.getAttribute('data-target');\nconst endpointsUrl= _apiEndpoints__WEBPACK_IMPORTED_MODULE_0__.apiEndpoints[dataTarget];\n\n\ntry {\nconst response = await fetch(endpointsUrl); // This line sends a request to the  endpointsUrl.\nif (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);//checks if the response was successful.\nconst data = await response.json();//The await pauses execution of the code in this async function, until the fetch request is resolved.\nrenderData(data.results, dataTarget);\n } catch (error) {\nconsole.error('Error fetching data:', error);\n  }\n\n});\n\n});  \n\n\n\n\n\n\nconst renderData = (data, dataTarget) => {\nconst contentContainer = document.querySelector('[data-to-show]');\ncontentContainer.innerText = ''; \nconst list = document.createElement('ul');\n\nlet filteredData;\n\nif (_records__WEBPACK_IMPORTED_MODULE_2__.records[dataTarget].length > 0) {\nfilteredData = data.filter(item => _records__WEBPACK_IMPORTED_MODULE_2__.records[dataTarget].includes(item.name || item.title));\n} else {\nfilteredData = data; \n}\n\nfilteredData.forEach(item => {\n\nconst listItem = document.createElement('li');\nconst image = document.createElement('img');\nconst textContainer = document.createElement('div');\nconst itemName = document.createElement('p');\nconst itemProperties = document.createElement('p');\n\nlistItem.appendChild(image);\ntextContainer.appendChild(itemName);\ntextContainer.appendChild(itemProperties);\nlistItem.appendChild(textContainer);\nlist.appendChild(listItem);\n\ncontentContainer.appendChild(list);\n\n// provides description of the image for screen readers used by visually impaired users.\n// Serves as a placeholder if the image fails to load.\nitemName.textContent = item.name || item.title;\nimage.src = _recordImags__WEBPACK_IMPORTED_MODULE_1__.recordImages[itemName.textContent]; \nimage.alt = itemName.textContent;\nitemName.textContent = `Name: ${item.name || item.title}`;\n\n\nswitch (dataTarget) {\ncase 'people':\n   itemProperties.textContent = `Height: ${item.height}. Birth Year: ${item.birth_year}. Hair color: ${item.hair_color}. Skin color: ${item.skin_color}. Gender: ${item.gender}`;\n     break;\ncase 'films':\n   itemProperties.textContent = `Release Date: ${item.release_date}. Dirctor: ${ item.director}. Edited: ${item.edited}. Producer: ${item.producer}. Crated: ${item.created}. `;\n     break;\ncase 'planets':\n   itemProperties.textContent = `Climate: ${item.climate}. Terrain: ${ item.terrain}. Created: ${item.created}. Diameter: ${item.diameter}. Gravity ${item.gravity}. `;\n     break;\ncase 'starships':\n      itemProperties.textContent = `Manufacturer: ${item.manufacturer}. Model: ${item.model}. Cost in credits: ${item.cost_in_credits}. Length: ${item.length}.`;\nbreak;\n\ndefault:\nitemProperties.textContent = \"No additional information available.\";\n\n  }\n\n});\n\n};\n\n\nconst backButton = document.querySelector('.backButton');\nbackButton.addEventListener('click', () => {\nconst category = document.querySelector('.category');\nconst backButton = document.querySelector('.backButton');\nconst contentContainer = document.querySelector('[data-to-show]');\n\n// Toggle visibility for back navigation\ncategory.classList.remove('hidden');\nbackButton.classList.add('hidden');\ncontentContainer.classList.add('hidden');\ncontentContainer.innerText = ''; // Clear the content\n});\n\n\n\n\n\n//# sourceURL=webpack://assignment_1/./src/js/app.js?");

/***/ }),

/***/ "./src/js/recordImags.js":
/*!*******************************!*\
  !*** ./src/js/recordImags.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   recordImages: () => (/* binding */ recordImages)\n/* harmony export */ });\n\n\n\n\nconst recordImages = { //Adding image to each of the records.\n    \"Luke Skywalker\": \"../src/assets/nr1.jpg\",\n    \"Darth Vader\": \"../src/assets/nr2.jpg\",\n    \"C-3PO\":\"../src/assets/nr3.jpg\",\n    \"Leia Organa\":\"../src/assets/nr4.jpg\",\n    \"Obi-Wan Kenobi\": \"../src/assets/nr5.jpg\",\n    \"R2-D2\": \"../src/assets/nr6.jpg\",\n\n    \"The Phantom Menace\": \"../src/assets/nr7.jpg\",\n    \"Attack of the Clones\": \"../src/assets/nr8.jpg\",\n    \"Revenge of the Sith\": \"../src/assets/nr9.jpg\",\n    \"A New Hope\": \"../src/assets/nr10.jpg\",\n    \"The Empire Strikes Back\": \"../src/assets/nr11.jpg\",\n    \"Return of the Jedi\": \"../src/assets/nr12.jpg\",\n\n    \"Tatooine\":\"../src/assets/nr13.jpg\",\n    \"Alderaan\":\"../src/assets/nr14.jpg\",\n    \"Yavin IV\":\"../src/assets/nr15.jpg\", \n    \"Hoth\": \"../src/assets/nr16.jpg\",\n    \"Dagobah\":\"../src/assets/nr17.jpg\",\n    \"Bespin\":\"../src/assets/nr18.jpg\",\n\n     \"TIE Advanced x1\": \"../src/assets/nr19.jpg\",\n     \"Y-wing\":\"../src/assets/nr20.jpg\",\n     \"Millennium Falcon\": \"../src/assets/nr21.jpg\",\n     \"Death Star\":\"../src/assets/nr22.jpg\",\n     \"Sentinel-class landing craft\": \"../src/assets/nr23.jpg\",\n     \"Rebel transport\": \"../src/assets/nr24.jpg\",\n\n};\n\n\n\n\n//# sourceURL=webpack://assignment_1/./src/js/recordImags.js?");

/***/ }),

/***/ "./src/js/records.js":
/*!***************************!*\
  !*** ./src/js/records.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   records: () => (/* binding */ records)\n/* harmony export */ });\n\n\nconst records = {    // The records i want to  add in each categories.\n    'people': ['Luke Skywalker', 'Darth Vader','R2-D2' , 'C-3PO','Leia Organa', 'Obi-Wan Kenobi' ],\n    'films': ['The Phantom Menace','Attack of the Clones','Revenge of the Sith','A New Hope','The Empire Strikes Back', 'Return of the Jedi' ],\n    'planets': ['Tatooine','Alderaan','Yavin IV','Hoth','Dagobah','Bespin' ],\n    'starships': ['TIE Advanced x1','Y-wing', 'Millennium Falcon','Death Star','Sentinel-class landing craft','Rebel transport',],\n  };\n\n\n  \n\n//# sourceURL=webpack://assignment_1/./src/js/records.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;