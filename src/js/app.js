
                        
    
// Apiendpoint: to specify wich item i want to add to the categories from the swapiApi.
       const apiEndpoints = {      
               'people': 'https://swapi.dev/api/people/',
               'films': 'https://swapi.dev/api/films/',
               'planets': 'https://swapi.dev/api/planets/',
               'starships': 'https://swapi.dev/api/starships/',
         };

   
        const items = {    // The records i want to  add in each categories.
               'people': ['Luke Skywalker', 'Darth Vader', 'Owen Lars', 'C-3PO','Leia Organo', 'Obi-Wan Kenobi'],
               'films': ['The Phantom Menace','Attack of the Clones','Revenge of the Sith','A New Hope','The Empire Strikes Back', 'Return of the Jedi',],
               'planets': ['Tatooine','Alderaan','Yavin IV','Hoth','Dagobah','Bespin',],
               'starships': [ 'TIE Advanced x1',  'Y-wing', 'Millennium Falcon','Death Star','Sentinel-class landing craft', ],
        };

        const itemImages = { //Adding image to each of the items.
                  "Luke Skywalker": "src/7.jpg",
                  "Darth Vader": "src/6.jpg",
        };

//Make variabel of buttons in the categories, so i can perform actions on each button.
            const categoryButtons = document.querySelectorAll('.categories button')

             categoryButtons.forEach(button =>{  
             button.addEventListener('click', async () => {  // The async will execute data from swapiAPI,when butons are activ.

       
            const categories = document.querySelector('.categories')
            const backButton = document.querySelector( '.backButton')
            const dataToShow = document.querySelector('[data-to-show]')
       
 // Use classList to toggle visibility
            categories.classList.add( 'hidden')
            backButton.classList.remove('hidden')
            dataToShow.classList.remove('hidden')


 // getAttribute: retrieves the value of the data-target attribute from the clicked button.
      // The value is then used to look up the corresponding API endpoint URL.    
           const dataTarget = button.getAttribute('data-target');
           const endpoints = apiEndpoints[dataTarget];//[showTarget]: This uses the value stored in showTarget as a key to access the corresponding value in the apiEndpoints.


        try {
            const response = await fetch(endpoints); // This line sends a network request to the URL contained in the endpoints variable
             //The await keyword pauses execution of the code in this async function until the fetch request is resolved.
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);//checks if the response was successful.
            const data = await response.json();
            renderData(data.results, dataTarget);
           } catch (error) {
            console.error('Error fetching data:', error);
           }
        });
     });

           const renderData = (data, dataTarget)=>{
           const dataToShow = document.querySelector('[data-to-show]');
           dataToShow.innerText= '';
           const list = document.createElement ('ul');


           let filteredData; 
           if( items[dataTarget].lenght> 0){
           filteredData = data.filter( item => items[dataTarget]
           .includes(item.name)||(item.title));
           } 
           else {
             filteredData = data;
           }
         }

            filteredData.forEach(items =>{

                const textContainer = document.createElement('div')
                const itemName = document.createElement('p')
                const listItem = document.createElement('li')
                const  image = document.createElement('img')
                const itemPropertis = document.createElement('p');

            })