// Define categories and their prices
const categories = {
    "Fashion": 5000,
    "Electronics": 30000,
    "Digital Photography": 50000,
    "Tour & Travels": 200000,
    "Real State": 5000000
};

// Budget limit
const budget = 5000000000;

// Function to create category elements
function createCategoryElements() {
    const categoriesDiv = document.getElementById('categories');

    // Create input elements for each category
    for (const [category, price] of Object.entries(categories)) {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'category';

        // Create a label for the category
        const label = document.createElement('label');
        label.textContent = `${category} (₹${price} per unit): `;

        // Create input for number of units
        const input = document.createElement('input');
        input.type = 'number';
        input.min = '0';
        input.value = '0'; // Default value

        // Create up and down buttons
        const upButton = document.createElement('button');
        upButton.textContent = '▲';
        upButton.onclick = () => { input.value = parseInt(input.value) + 1; };

        const downButton = document.createElement('button');
        downButton.textContent = '▼';
        downButton.onclick = () => {
            if (input.value > 0) {
                input.value = parseInt(input.value) - 1;
            }
        };

        // Append elements to the category div
        categoryDiv.appendChild(label);
        categoryDiv.appendChild(input);
        categoryDiv.appendChild(upButton);
        categoryDiv.appendChild(downButton);
        categoriesDiv.appendChild(categoryDiv);
    }
}

// Function to calculate total price
function calculateTotalPrice() {
    let total = 0;

    // Loop through each category
    const categoryDivs = document.querySelectorAll('.category');
    categoryDivs.forEach(categoryDiv => {
        const input = categoryDiv.querySelector('input');
        const categoryName = categoryDiv.querySelector('label').textContent.split(' ')[0]; // Get category name
        const pricePerUnit = categories[categoryName];

        total += pricePerUnit * parseInt(input.value); // Add to total
    });

    return total;
}

// Function to display the total price
function displayTotalPrice() {
    const total = calculateTotalPrice();
    const totalPriceElement = document.getElementById('total-price');

    totalPriceElement.textContent = `Total Price: ₹${total}`; // Display total price

    // Change color based on budget
    if (total <= budget) {
        totalPriceElement.style.color = 'green';
    } else if (total <= budget * 1.25) {
        totalPriceElement.style.color = 'yellow';
    } else {
        totalPriceElement.style.color = 'red';
    }
}

// Initialize the program
createCategoryElements();

// Attach event listener to submit button
document.getElementById('submit-btn').addEventListener('click', displayTotalPrice);
