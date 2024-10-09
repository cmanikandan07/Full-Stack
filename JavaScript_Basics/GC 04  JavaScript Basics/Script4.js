// script.js

// Function to process the name
function processName(event) {
    event.preventDefault(); // Prevent form submission

    // Get the full name from the input
    let fullName = document.getElementById('fullName').value;

    // Trim white spaces from the beginning and end
    fullName = fullName.trim();

    // Split the name into parts
    const nameParts = fullName.split(' ');

    // Handle cases where there is only one name provided
    if (nameParts.length < 2) {
        document.getElementById('firstName').innerText = 'Please enter both first and last name.';
        document.getElementById('lastName').innerText = '';
        return;
    }

    // Get first name and last name
    let firstName = nameParts[0];
    let lastName = nameParts[nameParts.length - 1];

    // Capitalize the first letter of first name and last name
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

    // Display the processed names
    document.getElementById('firstName').innerText = 'First Name: ' + firstName;
    document.getElementById('lastName').innerText = 'Last Name: ' + lastName;
}

// Add event listener to the form
document.getElementById('nameForm').addEventListener('submit', processName);
