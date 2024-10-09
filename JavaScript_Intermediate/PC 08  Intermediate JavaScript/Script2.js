function calculateTip() {
    // Get values from input fields
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const serviceQuality = parseInt(document.getElementById('serviceQuality').value);
    const numPeople = parseInt(document.getElementById('numPeople').value);

    // Validate inputs
    if (isNaN(billAmount) || isNaN(serviceQuality) || isNaN(numPeople) || numPeople <= 0) {
        alert("Please enter valid values.");
        return;
    }

    // Calculate tip per person
    const totalTip = (billAmount * (serviceQuality / 100));
    const tipPerPerson = totalTip / numPeople;

    // Format the result to 2 decimal places
    document.getElementById('tipResult').innerText = tipPerPerson.toFixed(2);
}
