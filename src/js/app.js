
                        
    
// Apiendpoint: to specify wich Category i want to add from  swapiApi.
       const apiEndpoints = {      
               'people': 'https://swapi.dev/api/people/',
               'films': 'https://swapi.dev/api/films/',
               'planets': 'https://swapi.dev/api/planets/',
               'starships': 'https://swapi.dev/api/starships/',
         };


   
        const records = {    // The records i want to  add in each categories.
               'people': ['Luke Skywalker', 'Darth Vader','R2-D2' , 'C-3PO','Leia Organa', 'Obi-Wan Kenobi' ],
               'films': ['The Phantom Menace','Attack of the Clones','Revenge of the Sith','A New Hope','The Empire Strikes Back', 'Return of the Jedi' ],
               'planets': ['Tatooine','Alderaan','Yavin IV','Hoth','Dagobah','Bespin' ],
               'starships': ['TIE Advanced x1','Y-wing', 'Millennium Falcon','Death Star','Sentinel-class landing craft','Rebel transport',],
        };

        const recordImages = { //Adding image to each of the records.
                  "Luke Skywalker": "assets/nr1.jpg",
                  "Darth Vader": "assets/nr2.jpg",
                  "C-3PO":"assets/nr3.jpg",
                  "Leia Organa":"assets/nr4.jpg",
                  "Obi-Wan Kenobi": "assets/nr5.jpg",
                  "R2-D2": "assets/nr6.jpg",

                  "The Phantom Menace": "assets/nr7.jpg",
                  "Attack of the Clones": "assets/nr8.jpg",
                  "Revenge of the Sith": "assets/nr9.jpg",
                  "A New Hope": "assets/nr10.jpg",
                  "The Empire Strikes Back": "assets/nr11.jpg",
                   "Return of the Jedi": "assets/nr12.jpg",

                   "Tatooine":"assets/nr13.jpg",
                   "Alderaan":"assets/nr14.jpg",
                   "Yavin IV":"assets/nr15.jpg", 
                   "Hoth": "assets/nr16.jpg",
                   "Dagobah":"assets/nr17.jpg",
                   "Bespin":"assets/nr18.jpg",

                   "TIE Advanced x1": "assets/nr19.jpg",
                   "Y-wing":"assets/nr20.jpg",
                    "Millennium Falcon": "assets/nr21.jpg",
                    "Death Star":"assets/nr22.jpg",
                    "Sentinel-class landing craft": "assets/nr23.jpg",
                    "Rebel transport": "assets/nr24.jpg",
            
        };


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
           itemProperties.textContent = `Height: ${item.height},Birth Year: ${item.birth_year}, Hair color: ${item.hair_color}, Skin color: ${item.skin_color}, Gender: ${item.gender}`;
            break;
       case 'films':
           itemProperties.textContent = `Release Date: ${item.release_date}, Dirctor: ${ item.director}, Edited: ${item.edited}, Producer: ${item.producer}, Crated: ${item.created} `;
             break;
       case 'planets':
           itemProperties.textContent = `Climate: ${item.climate}, Terrain: ${ item.terrain}, Created: ${item.created}, Diameter: ${item.diameter}, Gravity ${item.gravity} `;
           break;
        case 'starships':
              itemProperties.textContent = `Manufacturer: ${item.manufacturer}, Model: ${item.model}, Cost in credits: ${item.cost_in_credits}, Length: ${item.length}`;
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
