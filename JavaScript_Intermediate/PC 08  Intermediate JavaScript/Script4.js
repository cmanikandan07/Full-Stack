// Select the textarea and output div
const textInput = document.querySelector('#textInput');
const outputDiv = document.querySelector('#output');

// Function to count words and sentences
function countWordsAndSentences() {
    const text = textInput.value.trim(); // Get the input text and trim whitespace
    const words = text ? text.split(/\s+/) : []; // Split by whitespace to count words
    const sentences = text ? text.split(/[.!?]/).filter(sentence => sentence.trim() !== '') : []; // Split by sentence delimiters

    const wordCount = words.length; // Count words
    const sentenceCount = sentences.length; // Count sentences

    // Update the output div with the counts
    outputDiv.innerHTML = `Words: ${wordCount}, Sentences: ${sentenceCount}`;
}

// Add an event listener for input events
textInput.addEventListener('input', countWordsAndSentences);
