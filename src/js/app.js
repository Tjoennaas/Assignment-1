
                        
    
// Apiendpoint: to specify wich Category i want to add from  swapiApi.
       const apiEndpoints = {      
               'people': 'https://swapi.dev/api/people/',
               'films': 'https://swapi.dev/api/films/',
               'planets': 'https://swapi.dev/api/planets/',
               'starships': 'https://swapi.dev/api/starships/',
         };

   
        const records = {    // The records i want to  add in each categories.
               'people': ['Luke Skywalker', 'Darth Vader', 'Owen Lars', 'C-3PO','Leia Organo', 'Obi-Wan Kenobi'],
               'films': ['The Phantom Menace','Attack of the Clones','Revenge of the Sith','A New Hope','The Empire Strikes Back', 'Return of the Jedi',],
               'planets': ['Tatooine','Alderaan','Yavin IV','Hoth','Dagobah','Bespin',],
               'starships': [ 'TIE Advanced x1',  'Y-wing', 'Millennium Falcon','Death Star','Sentinel-class landing craft', ],
        };

        const recordImages = { //Adding image to each of the items.
                  "Luke Skywalker": "src/.jpg",
                  "Darth Vader": "src/.jpg",
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
       const response = await fetch(endpointsUrl); // This line sends a network request to the URL contained in the endpoints variable.
//The await keyword pauses execution of the code in this async function, until the fetch request is resolved.
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
       const list = document.createElement( 'ul'); //Create a  <ul> element that can be used to display a list based on the data.
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

// provides description of the image for screen readers used by visually impaired users.
// Serves as a placeholder if the image fails to load.
       itemName.textContent = item.name || item.title;
       image.alt = itemName.textContent;
    

   })