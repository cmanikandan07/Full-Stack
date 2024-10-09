// 1. Select element with the ID "domainPreference"
const domainPreferenceElement = document.querySelector("#domainPreference");
console.log("Element with ID domainPreference:", domainPreferenceElement);

// 2. Select element with the class "education"
const educationElement = document.querySelector(".education");
console.log("Element with class education:", educationElement);

// 3. Select all <li> elements
const liElements = document.querySelectorAll("li");
console.log("All <li> elements:");
liElements.forEach((li, index) => {
    console.log(`Item ${index + 1}:`, li);
});
