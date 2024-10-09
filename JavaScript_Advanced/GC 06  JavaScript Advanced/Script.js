// Add an event listener to the button with id 'jokeButton'
// When the button is clicked, the fetchJoke function will be executed
document.getElementById("jokeButton").addEventListener("click", fetchJoke);

// Function to fetch a random joke from the API
function fetchJoke() {
    // Fetch data from the API
    fetch("https://backend-omega-seven.vercel.app/api/getjoke")
        .then(response => {
            // Check if the response is OK (status code 200)
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json(); // Parse the JSON from the response
        })
        .then(data => {
            // Select the div with id 'joke' to display the joke
            const jokeElement = document.getElementById("joke");
            // Update the inner HTML of the joke element with the question and punchline
            jokeElement.innerHTML = `<strong>Question:</strong> ${data.question}<br><strong>Punchline:</strong> ${data.punchline}`;
        })
        .catch(error => {
            // Log any errors that occur during the fetch
            console.error("Error fetching joke:", error);
            // Display a default joke if the API fails
            const jokeElement = document.getElementById("joke");
            jokeElement.innerHTML = `<strong>Question:</strong> Why don’t mountains get cold in the winter?<br><strong>Punchline:</strong> They wear snow caps!!`;
        });
}
