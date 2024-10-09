// Function to convert units based on the provided conversion code and value
function convertUnits(code, value) {
    let result;

    // Switch based on the first character of the code to determine the parameter
    switch (code.charAt(1)) {
        case 'a': // Length conversions
            if (code.charAt(0) === '1') {
                // 1a: meter to foot
                result = value * 3.281;
            } else if (code.charAt(0) === '2') {
                // 2a: foot to meter
                result = value / 3.281;
            } else if (code.charAt(0) === '3') {
                // 3a: centimeter to inch
                result = value / 2.54;
            } else if (code.charAt(0) === '4') {
                // 4a: inch to centimeter
                result = value * 2.54;
            } else {
                return "Invalid code for Length!";
            }
            break;
        case 'b': // Volume conversions
            if (code.charAt(0) === '1') {
                // 1b: cubic meter to liters
                result = value * 1000;
            } else if (code.charAt(0) === '2') {
                // 2b: liters to cubic meter
                result = value / 1000;
            } else {
                return "Invalid code for Volume!";
            }
            break;
        case 'c': // Area conversions
            if (code.charAt(0) === '1') {
                // 1c: square foot to acre
                result = value / 43560; // 1 acre = 43560 square feet
            } else if (code.charAt(0) === '2') {
                // 2c: acre to square foot
                result = value * 43560;
            } else {
                return "Invalid code for Area!";
            }
            break;
        default:
            return "Invalid conversion parameter!";
    }

    return result;
}

// Get the button and result div from the DOM
const convertBtn = document.getElementById("convertBtn");
const resultDiv = document.getElementById("result");

// Add event listener for the button click
convertBtn.addEventListener("click", function () {
    const code = document.getElementById("conversionCode").value.trim(); // Get conversion code
    const value = parseFloat(document.getElementById("valueToConvert").value); // Get value to convert

    // Validate inputs
    if (!code || isNaN(value)) {
        resultDiv.innerHTML = "Please enter a valid conversion code and value.";
        return;
    }

    // Call the conversion function and display the result
    const convertedValue = convertUnits(code, value);
    resultDiv.innerHTML = `Converted Value: ${convertedValue}`;
});
