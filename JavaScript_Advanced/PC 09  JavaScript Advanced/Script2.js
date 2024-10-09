// Function to fetch character data from the Star Wars API
async function fetchCharacterData() {
    const apiUrl = 'https://swapi.dev/api/people/1'; // API endpoint for character data
    try {
        const response = await fetch(apiUrl); // Fetch data from the API
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`); // Handle non-200 responses
        }
        const data = await response.json(); // Parse the JSON response

        // Display character data
        displayCharacterData(data);
    } catch (error) {
        console.error('Error fetching data:', error); // Log any errors
        document.getElementById('character-data').textContent = 'Failed to load character data'; // Show error message
    }
}

// Function to display character data
function displayCharacterData(data) {
    const characterDataDiv = document.getElementById('character-data');
    characterDataDiv.innerHTML = ''; // Clear the loading text

    // Display character name
    const characterName = document.createElement('h2');
    characterName.textContent = `Name: ${data.name}`;
    characterDataDiv.appendChild(characterName); // Append name to the character data div

    // Display films
    const filmsList = document.createElement('h3');
    filmsList.textContent = 'Films:';
    characterDataDiv.appendChild(filmsList);

    const films = data.films; // Get the films array from the data
    films.forEach(filmUrl => {
        fetch(filmUrl) // Fetch each film's data
            .then(response => response.json())
            .then(filmData => {
                const filmName = document.createElement('p');
                filmName.textContent = filmData.title; // Display film title
                characterDataDiv.appendChild(filmName); // Append film title to the character data div
            })
            .catch(error => console.error('Error fetching film data:', error)); // Handle errors for film data fetching
    });

    // Display vehicles
    const vehiclesList = document.createElement('h3');
    vehiclesList.textContent = 'Vehicles:';
    characterDataDiv.appendChild(vehiclesList);

    const vehicles = data.vehicles; // Get the vehicles array from the data
    vehicles.forEach(vehicleUrl => {
        fetch(vehicleUrl) // Fetch each vehicle's data
            .then(response => response.json())
            .then(vehicleData => {
                const vehicleName = document.createElement('p');
                vehicleName.textContent = vehicleData.name; // Display vehicle name
                characterDataDiv.appendChild(vehicleName); // Append vehicle name to the character data div
            })
            .catch(error => console.error('Error fetching vehicle data:', error)); // Handle errors for vehicle data fetching
    });
}

// Call the function to fetch character data on page load
fetchCharacterData();
