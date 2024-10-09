// IIFE for initial loading message
(function () {
    console.log("App is loading");
})();

// Function to handle color change
document.getElementById('loadButton').addEventListener('click', function () {
    // Prompt user for their favorite color
    const favoriteColor = prompt("Enter your favorite color (Red, Blue, Green, Black, Yellow, Orange):");

    // IIFE to check the color and change the background
    (function (color) {
        const validColors = ['red', 'blue', 'green', 'black', 'yellow', 'orange', 'white'];

        if (validColors.includes(color.toLowerCase())) {
            document.body.style.backgroundColor = color;
            console.log("App is loaded");
        } else {
            console.error("INVALID COLOUR");
        }
    })(favoriteColor);
});
