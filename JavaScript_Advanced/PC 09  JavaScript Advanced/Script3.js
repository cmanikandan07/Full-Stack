// Function to generate employee details
function generateEmployeeDetails(names) {
    const employeeDetails = []; // Array to hold details of all employees

    // Split the input names by space
    const nameArray = names.split(' ');

    // Process each name
    nameArray.forEach(name => {
        const [firstName, lastName] = name.split('_'); // Split by underscore

        // Generate email, username, and password
        const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@abc.com`;
        const username = `${firstName}${capitalize(lastName)}`;
        const password = `${lastName}#${capitalize(firstName)}`;

        // Push the details into the array
        employeeDetails.push({
            firstName,
            lastName,
            email,
            username,
            password,
        });
    });

    // Display the details on the page
    displayDetails(employeeDetails);
}

// Function to capitalize the first letter of a string
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase(); // Capitalize first letter
}

// Function to display the details
function displayDetails(details) {
    const solutionElement = document.getElementById('solution');
    solutionElement.innerHTML = ''; // Clear previous content

    // Loop through each employee detail and append it to the solution element
    details.forEach(detail => {
        solutionElement.innerHTML += `
            <span>
                Name: ${detail.firstName} ${detail.lastName} <br>
                Email: ${detail.email} <br>
                Username: ${detail.username} <br>
                Password: ${detail.password} <br><br>
            </span>
        `;
    });
}

// Sample input for testing
const sampleInput = 'Dhoni_ms Sachine_tendulkar Virat_kholi'; // Change this input as needed
generateEmployeeDetails(sampleInput); // Call the function with the sample input
