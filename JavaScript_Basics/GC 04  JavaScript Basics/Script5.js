// script.js

// Function to calculate the tax based on income
function calculateTax(income) {
    let tax = 0;

    if (income < 250000) {
        tax = 0; // No tax for income less than ₹2,50,000
    } else if (income >= 250000 && income < 500000) {
        tax = income * 0.05; // 5% tax for income between ₹2,50,000 and ₹5,00,000
    } else if (income >= 500000 && income < 1000000) {
        tax = income * 0.10; // 10% tax for income between ₹5,00,000 and ₹10,00,000
    } else {
        tax = income * 0.20; // 20% tax for income more than ₹10,00,000
    }

    return tax;
}

// Event listener for the calculate button
document.getElementById('calculateBtn').addEventListener('click', function () {
    // Get the income value from the input field
    const income = parseFloat(document.getElementById('income').value);

    // Validate income input
    if (isNaN(income) || income < 0) {
        document.getElementById('output').innerText = 'Please enter a valid income.';
        document.getElementById('taxAmount').innerText = '';
        return;
    }

    // Calculate the tax
    const tax = calculateTax(income);

    // Display the total income and tax amount
    document.getElementById('output').innerText = `Total Income: ₹${income}`;
    document.getElementById('taxAmount').innerText = `Tax Amount: ₹${tax.toFixed(2)}`;
});
