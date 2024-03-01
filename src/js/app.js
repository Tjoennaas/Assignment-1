
import { apiEndpoints } from "./apiEndpoints";

import { recordImages } from "./recordImags";
 
import { records }   from "./records";



// Selecting all the buttons, to perform actions on each button.
const categoryButtons = document.querySelectorAll('.category__button')
categoryButtons.forEach(button =>{  
button.addEventListener('click', async () => {  // The async will execute data from swapiAPI,when butons are activ.


const category = document.querySelector('.category');
const backButton = document.querySelector( '.backButton');
const contentContainer = document.querySelector('[data-to-show]');

//Toggle visibility
category.classList.add( 'hidden');
backButton.classList.remove('hidden');
contentContainer.classList.remove('hidden');


// GetAttribute: retrieves the value of the data-target attribute from the clicked button.
// The value is then used to look up the API endpoint.
const dataTarget= button.getAttribute('data-target');
const endpointsUrl= apiEndpoints[dataTarget];


try {
const response = await fetch(endpointsUrl); // This line sends a request to the  endpointsUrl.
if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);//checks if the response was successful.
const data = await response.json();//The await pauses execution of the code in this async function, until the fetch request is resolved.
renderData(data.results, dataTarget);
 } catch (error) {
console.error('Error fetching data:', error);
  }

});

});  

const renderData = (data, dataTarget) => {
const contentContainer = document.querySelector('[data-to-show]');
contentContainer.innerText = ''; 
const list = document.createElement('ul');

let filteredData;

if (records[dataTarget].length > 0) {
filteredData = data.filter(item => records[dataTarget].includes(item.name || item.title));
} else {
filteredData = data; 
}

filteredData.forEach(item => {

const listItem = document.createElement('li');
const image = document.createElement('img');
const textContainer = document.createElement('div');
const itemName = document.createElement('p');
const itemProperties = document.createElement('p');

listItem.appendChild(image);
textContainer.appendChild(itemName);
textContainer.appendChild(itemProperties);
listItem.appendChild(textContainer);
list.appendChild(listItem);

contentContainer.appendChild(list);

// provides description of the image for screen readers used by visually impaired users.
// Serves as a placeholder if the image fails to load.
itemName.textContent = item.name || item.title;
image.src = recordImages[itemName.textContent]; 
image.alt = itemName.textContent;
itemName.textContent = `Name: ${item.name || item.title}`;


switch (dataTarget) {
case 'people':
   itemProperties.textContent = `Height: ${item.height}. Birth Year: ${item.birth_year}. Hair color: ${item.hair_color}. Skin color: ${item.skin_color}. Gender: ${item.gender}`;
     break;
case 'films':
   itemProperties.textContent = `Release Date: ${item.release_date}. Dirctor: ${ item.director}. Edited: ${item.edited}. Producer: ${item.producer}. Crated: ${item.created}. `;
     break;
case 'planets':
   itemProperties.textContent = `Climate: ${item.climate}. Terrain: ${ item.terrain}. Created: ${item.created}. Diameter: ${item.diameter}. Gravity ${item.gravity}. `;
     break;
case 'starships':
      itemProperties.textContent = `Manufacturer: ${item.manufacturer}. Model: ${item.model}. Cost in credits: ${item.cost_in_credits}. Length: ${item.length}.`;
break;

default:
itemProperties.textContent = "No additional information available.";

  }

});

};

const backButton = document.querySelector('.backButton');
backButton.addEventListener('click', () => {
const category = document.querySelector('.category');
const backButton = document.querySelector('.backButton');
const contentContainer = document.querySelector('[data-to-show]');

// Toggle visibility for back navigation
category.classList.remove('hidden');
backButton.classList.add('hidden');
contentContainer.classList.add('hidden');
contentContainer.innerText = ''; // Clear the content
});

