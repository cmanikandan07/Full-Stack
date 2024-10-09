

document.addEventListener("DOMContentLoaded", function () {
    console.log("Document loaded and ready!");
   
});



document.addEventListener("DOMContentLoaded", function () {
    // Array of nature images (URLs can be from a public source)
    const images = [
        "images/img1.jpg",  // Random  image 1
        "images/img2.jpg",  // Random  image 2
        "images/img3.jpg",  // Random  image 3
        "images/img4.jpg",  // Random  image 4
        "images/img5.jpg",  // Random  image 5
      

        
       
    ];

    // Function to create carousel items
    function createCarouselItems() {
        const carouselImages = document.getElementById("carouselImages");
        const randomIndices = [];

        // Generate 3 unique random indices
        while (randomIndices.length < 3) {
            const randomIndex = Math.floor(Math.random() * images.length);
            if (!randomIndices.includes(randomIndex)) {
                randomIndices.push(randomIndex);
            }
        }

        // Create carousel items for each random index
        randomIndices.forEach((index, i) => {
            const isActive = i === 0 ? 'active' : '';  // First item should be active
            const carouselItem = `
                <div class="carousel-item ${isActive}">
                    <img src="${images[index]}" class="d-block w-100" alt="Nature Image ${index + 1}">
                </div>
            `;
            carouselImages.innerHTML += carouselItem;
        });
    }

    // Initialize the carousel
    createCarouselItems();
});





// Add event listeners to the close buttons
document.addEventListener("DOMContentLoaded", function () {
    // Select all close buttons
    const closeButtons = document.querySelectorAll('.btn-close');

    // Loop through each close button
    closeButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Log a message when a card is closed
            console.log('Card closed');
        });
    });
});
