// JavaScript source code

// script.js

// User details
var userName = "Manikandan"; // Change this to the actual user's name
var userAge = "27"; // Change this to the actual user's age (as a string)
var userProfession = "Devops Enginner"; // Change this to the actual user's profession

// Convert age to number and calculate Year of Birth (YOB)
var ageNumber = parseInt(userAge);
var currentYear = new Date().getFullYear();
var userYOB = currentYear - ageNumber;

// Create an email address from the name
var email = userName.toLowerCase().replace(/\s+/g, '.') + '@example.com'; // Example domain

// Set the values in the HTML
document.getElementById("id1").innerText = userName.toUpperCase(); // Display name in BLOCK LETTERS
document.getElementById("id2").innerText = userAge.toUpperCase(); // Display age in BLOCK LETTERS
document.getElementById("id3").innerText = userYOB; // Display Year of Birth
document.getElementById("id4").innerText = email.toUpperCase(); // Display email in BLOCK LETTERS
document.getElementById("id5").innerText = userProfession.toUpperCase(); // Display profession in BLOCK LETTERS
