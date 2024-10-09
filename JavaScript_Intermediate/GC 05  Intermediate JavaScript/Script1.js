let startTime = 0;
let elapsedTime = 0;
let timerInterval;

const timeDisplay = document.getElementById("time");
const messageDisplay = document.getElementById("message");
const stopwatchDisplay = document.getElementById("stopwatch");

// Function to format time in MM:SS.SS format
function formatTime(time) {
    const minutes = Math.floor(time / 60000);
    const seconds = ((time % 60000) / 1000).toFixed(2);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(5, '0')}`;
}

// Function to start the stopwatch
function startTimer() {
    if (!timerInterval) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            timeDisplay.textContent = formatTime(elapsedTime);
        }, 10); // Update every 10 milliseconds for two decimal precision
    }
}

// Function to stop the stopwatch
function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

// Function to reset the stopwatch
function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    elapsedTime = 0;
    timeDisplay.textContent = "00:00.00";
}

// Display the message for 2 seconds before showing the stopwatch
setTimeout(() => {
    messageDisplay.style.display = "none";
    stopwatchDisplay.style.display = "block";
}, 2000);
