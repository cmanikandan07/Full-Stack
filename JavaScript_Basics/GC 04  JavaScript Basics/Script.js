// script.js

// Function to create the bill
function makeBill() {
    // Prompt the user for the number of items
    const numberOfItems = parseInt(prompt("Enter the total number of items:"));

    // Initialize variables to hold item names, prices, and the total cost
    let billDetails = "<h2>BILL</h2>";
    let totalPrice = 0;

    // Loop to get item names and prices
    for (let i = 0; i < numberOfItems; i++) {
        const itemInput = prompt("Enter item name and price separated by a space (e.g., ItemName 10):");
        const [itemName, itemPrice] = itemInput.split(" "); // Split the input into name and price

        // Convert price to number and add to total price
        const price = parseFloat(itemPrice);
        totalPrice += price;

        // Append item details to the bill
        billDetails += `<h4>${itemName}: ₹${price.toFixed(2)}</h4>`;
    }
    billDetails += `<hr style="border-top: 1px solid black;">`; // Line of dashes
    // Append total price and line of dashes to the bill
    billDetails += `<h3>Total Price: ₹${totalPrice.toFixed(2)}</h3>`;
 

    // Display the bill details in the span with id "solution"
    document.getElementById("solution").innerHTML = billDetails;
}

// Call the function to create the bill
makeBill();


        ////////////////////

