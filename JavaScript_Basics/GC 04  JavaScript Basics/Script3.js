

// Function to populate student details
function populateDetails() {
    // Student details
    const details = {
        name: "Manikandan C",
        dob: "11/07/1997",
        email: "Manikandan@example.com",
        phone: "+1234567890",
        address: "123 Main St, chennai TamilNadu"
    };

    // Accessing the span elements and setting their inner HTML
    document.getElementById("name").innerHTML = details.name;
    document.getElementById("dob").innerHTML = details.dob;
    document.getElementById("email").innerHTML = details.email;
    document.getElementById("phone").innerHTML = details.phone;
    document.getElementById("address").innerHTML = details.address;
}

// Call the function to populate the details on page load
populateDetails();
