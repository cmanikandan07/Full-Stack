

// Function to calculate BMI
function calculateBMI() {
    // Prompt user for weight and height
    const weight = parseFloat(prompt("Enter your weight in kg:"));
    const height = parseFloat(prompt("Enter your height in meters:"));

    // Validate the input
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById("output").innerHTML = "Please enter valid positive numbers for weight and height.";
        return;
    }

    // Calculate BMI
    const bmi = weight / (height * height);
    const roundedBMI = Math.round(bmi * 10) / 10; // Round to 1 decimal place

    // Determine BMI category
    let category;
    if (roundedBMI <= 18.4) {
        category = "Underweight";
    } else if (roundedBMI >= 18.5 && roundedBMI <= 24.9) {
        category = "Normal";
    } else if (roundedBMI >= 25 && roundedBMI <= 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    // Display the result
    document.getElementById("output").innerHTML = `Your BMI is: ${roundedBMI} - Category: ${category}`;
}

// Call the function to calculate BMI
calculateBMI();
