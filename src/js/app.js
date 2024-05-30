
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
  const itemProperties = document.createElement('div'); 
  
  itemProperties.classList.add('item-properties');
  
  
  listItem.appendChild(image);
  textContainer.appendChild(itemName);
  textContainer.appendChild(itemProperties);
  listItem.appendChild(textContainer);
  list.appendChild(listItem); 
  
  contentContainer.appendChild(list); 
  

  itemName.textContent = item.name || item.title;
  image.src = recordImages[itemName.textContent]; 
  image.alt = itemName.textContent;
  itemName.textContent = `Name: ${item.name || item.title}`;
  
  function addProperty(text) {
      const p = document.createElement('p');
      p.textContent = text;
      itemProperties.appendChild(p);
  }
  
  // Switch case to handle different item properties based on `dataTarget`
  switch (dataTarget) {
      case 'people':
          addProperty(`Height: ${item.height}`);
          addProperty(`Birth Year: ${item.birth_year}`);
          addProperty(`Hair Color: ${item.hair_color}`);
          addProperty(`Skin Color: ${item.skin_color}`);
          addProperty(`Gender: ${item.gender}`);
          break;
      case 'films':
          addProperty(`Release Date: ${item.release_date}`);
          addProperty(`Director: ${item.director}`);
          addProperty(`Edited: ${item.edited}`);
          addProperty(`Producer: ${item.producer}`);
          addProperty(`Created: ${item.created}`);
          break;
      case 'planets':
          addProperty(`Climate: ${item.climate}`);
          addProperty(`Terrain: ${item.terrain}`);
          addProperty(`Created: ${item.created}`);
          addProperty(`Diameter: ${item.diameter}`);
          addProperty(`Gravity: ${item.gravity}`);
          break;
      case 'starships':
          addProperty(`Manufacturer: ${item.manufacturer}`);
          addProperty(`Model: ${item.model}`);
          addProperty(`Cost in credits: ${item.cost_in_credits}`);
          addProperty(`Length: ${item.length}`);
          break;
      default:
          addProperty("No additional information available.");
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

