// Function to update the signatures based on user input
function updateSignatures() {
    const fullName = nameInput.value.trim(); // Get the trimmed user input
    const shortName = fullName ? `${fullName.charAt(0)}. ${fullName.split(' ').pop()}` : ''; // Generate short name

    // Update the displayed signatures
    fullNameSignature.textContent = fullName;
    shortNameSignature.textContent = shortName;
}

// Get references to DOM elements
const nameInput = document.getElementById('nameInput');
const fullNameSignature = document.getElementById('fullNameSignature');
const shortNameSignature = document.getElementById('shortNameSignature');
const fontSamplesDiv = document.getElementById('fontSamples');

// Add event listener to update signatures live
nameInput.addEventListener('input', updateSignatures);

// Array of font names for signature display
const fonts = [
    'Roboto',
    'Lobster',
    'Pacifico',
    'Courgette',
    'Dancing Script',
    'Sacramento'
];

// Display font samples on page load
fonts.forEach(font => {
    const sampleDiv = document.createElement('div');
    sampleDiv.classList.add('font-sample');
    sampleDiv.style.fontFamily = font; // Set the font for the sample
    sampleDiv.textContent = `Sample text in ${font}`; // Sample text
    fontSamplesDiv.appendChild(sampleDiv); // Add sample to font samples section
});
