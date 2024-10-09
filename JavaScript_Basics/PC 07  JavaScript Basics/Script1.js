// Get the contents of the headers
var firstName = document.querySelector("h1").innerText; // Get the text from <h1>
var lastName = document.querySelector("h2").innerText;  // Get the text from <h2>

// Merge the two names
var fullName = firstName + " " + lastName;

// Update the <h1> header with the full name
document.querySelector("h1").innerText = fullName;

// Log the fixed header to the console
console.log("Header fixed to:", fullName);


/////////////
