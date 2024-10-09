// Initialize the counter value to 0
let counterValue = 0;

// Function to add 1 to the counter value
function add() {
    counterValue++;
    updateCounterDisplay();
}

// Function to subtract 1 from the counter value
function subtract() {
    counterValue--;
    updateCounterDisplay();
}

// Function to reset the counter value to 0
function reset() {
    counterValue = 0;
    updateCounterDisplay();
}

// Function to update the counter display
function updateCounterDisplay() {
    document.getElementById('counter-value').textContent = counterValue;
}
