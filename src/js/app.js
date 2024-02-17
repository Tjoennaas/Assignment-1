
                        
    
// Apiendpoint: to specify wich Category i want to add from  swapiApi.
       const apiEndpoints = {      
               'people': 'https://swapi.dev/api/people/',
               'films': 'https://swapi.dev/api/films/',
               'planets': 'https://swapi.dev/api/planets/',
               'starships': 'https://swapi.dev/api/starships/',
         };

   
        const records = {    // The records i want to  add in each categories.
               'people': ['Luke Skywalker', 'Darth Vader', 'Yoda', 'C-3PO','Leia Organo', 'Obi-Wan Kenobi'],
               'films': ['The Phantom Menace','Attack of the Clones','Revenge of the Sith','A New Hope','The Empire Strikes Back', 'Return of the Jedi',],
               'planets': ['Tatooine','Alderaan','Yavin IV','Hoth','Dagobah','Bespin',],
               'starships': [ 'TIE Advanced x1','Y-wing', 'Millennium Falcon','Death Star','Sentinel-class landing craft','Rebel transport',],
        };

        const recordImages = { //Adding image to each of the records.
                  "Luke Skywalker": "assets/Luke-skywalker.jpg",
                  "Darth Vader": "assetes/ darth-vader.jpg",
                  "C-3PO":"assets/c-3po.jpg",
                  "Leia Organo":"assets/leia.jpg",
                  "Obi-Wan Kenobi": "assets/obi-wan-kenobi.jpg",
                  "Yoda": "assets/Yoda.jpg",

                  "The Phantom Menace": "assets/the-phantom-menace.jpg",
                  "Attack of the Clones": "assets/attack-of-the-clones.jpg",
                  "Revenge of the Sith": "assets/rewange-of-the-sith.jpg",
                  "A New Hope":"a-new-hope.jpg",
                  "The Empire Strikes Back": "assets/empire-strikes-back.jpg",
                  "Return of the Jedi ":"assets/star-wars-Return-jedi.jpg",

                   "Tatooine":"assets/tatooine.jpg",
                   "Aldreaan":"assets/aldreaan.jpg",
                   "Yavin IV":"assets/yavin4.jpg", 
                   "Hoth": "assets/Hoth.jpg",
                   "Dagobah":"assets/Dagobah",
                   "Bespin":"assets/Bespin.jpg",

                   "TIE Advanced x1": "assets/tie-advanced-1.jpg",
                   "Y-wing":"assets/Y-Wing.jpg",
                    "Millennium Falcon": "assets/millennium-falcon.jpg",
                    "Death Star":"assets/Death.jpg",
                    "Sentinel-class landing craft": "assets/landing-craft.jpg",
                    "Rebel transport": "assets/g75.jpg",
            
        };


// Selecting all the buttons, to perform actions on each button.
        const categoryButtons = document.querySelectorAll('.category__button')
        categoryButtons.forEach(button =>{  
        button.addEventListener('click', async () => {  // The async will execute data from swapiAPI,when butons are activ.


       const category = document.querySelector('.category')
       const backButton = document.querySelector( '.backButton')
       const contentContainer = document.querySelector('[data-to-show]')

//Toggle visibility
       category.classList.add( 'hidden')
       backButton.classList.remove('hidden')
       contentContainer.classList.remove('hidden')


// GetAttribute: retrieves the value of the data-target attribute from the clicked button.
// The value is then used to look up the API endpoint.    
      const dataTarget= button.getAttribute('data-target');
      const endpointsUrl= apiEndpoints[dataTarget];//[showTarget]: This uses the value stored in showTarget as a key to access the value in the apiEndpoints.


        try {
       const response = await fetch(endpointsUrl); // This line sends a request to the  endpointsUrl.
//The await pauses execution of the code in this async function, until the fetch request is resolved.
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);//checks if the response was successful.
        const data = await response.json();
        renderData(data.results, endpointsUrl);
         } catch (error) {
        console.error('Error fetching data:', error);
          }
        });
     });  

   const renderData = (data, dataTarget) => {  //contentContainer for displaying a list based on data.
       const contentContainer = document.querySelector('[data-to-show]');  
       contentContainer.innerText = ''; //Empty the content of this element by setting its innerText to an empty string.
       const list = document.createElement( 'ul'); //Create a <ul> element that display a list based on the data.
   }
   if (records[dataTarget].length > 0) {   // Data is filtered to include only those items whose name or title matches items in records[dataTarget].
       filteredData = data.filter(item => records[dataTarget].includes(item.name || item.title));
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
           itemProperties.textContent = `Height: ${item.height}`;`Birth Year: ${item.birth_year}`; `Hair color: ${item.hair_color}`;
           `Skin color: ${item.skin_color}`; `Gender: ${item.gender}`;
           break;
       case 'films':
           itemProperties.textContent = `Release Date: ${item.release_date}`; `Dirctor: ${ director}`;
           `Edited: ${edited}`; `Producer: ${producer}`; `Crated: ${created} `;
           break;
       case 'planets':
           itemProperties.textContent = `Climate: ${item.climate}`; `Terrain: ${ item.terrain}`; `Created: ${item.created}`; `Diameter: ${item.diameter}`; `Gravity ${item.gravity} `;
           break;
        case 'starships':
              itemProperties.textContent = `Created: ${item.climat}`; `Model: ${item.model}`; `Passengers: ${item.passengers}`; 
              `Consumables: ${item.consumables}`; `Crew: ${item.crew}`;
        break;
       default:
           itemProperties.textContent = "No additional information available.";
      }

   });

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
