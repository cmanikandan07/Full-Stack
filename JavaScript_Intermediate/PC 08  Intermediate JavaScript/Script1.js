document.getElementById('bgColor').addEventListener('change', function () {
    // Get the selected color
    const selectedColor = this.value;

    // Set the background color
    document.body.style.backgroundColor = selectedColor;

    // Determine the text color based on the background color
    let textColor;
    switch (selectedColor) {
        case 'red':
        case 'blue':
        case 'green':
            textColor = 'white'; // Use white text
            break;
        case 'yellow':
        case 'white':
        default:
            textColor = 'black'; // Use black text
            break;
    }

    // Set the text color
    document.body.style.color = textColor;
});
